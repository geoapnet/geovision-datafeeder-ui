import { Injectable } from '@angular/core'
import { marker } from '@biesbjerg/ngx-translate-extract-marker'
import { WfsEndpoint, WfsVersion } from '@camptocamp/ogc-client'
import {
  BaseReader,
  FetchError,
  openDataset,
  SupportedType,
  SupportedTypes,
} from '@geonetwork-ui/data-fetcher'
import {
  getFileFormat,
  getFileFormatFromServiceOutput,
  getMimeTypeForFormat,
  ProxyService,
} from '@geonetwork-ui/util/shared'
import type { FeatureCollection } from 'geojson'
import { from, Observable, throwError } from 'rxjs'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import {
  DatasetDistribution,
  DatasetServiceDistribution,
} from '@geonetwork-ui/common/domain/model/record'

marker('wfs.unreachable.cors')
marker('wfs.unreachable.http')
marker('wfs.unreachable.unknown')
marker('wfs.featuretype.notfound')
marker('wfs.geojsongml.notsupported')
marker('dataset.error.network')
marker('dataset.error.http')
marker('dataset.error.parse')
marker('dataset.error.unsupportedType')
marker('dataset.error.unknown')

interface WfsDownloadUrls {
  all: { [format: string]: string }
  geojson: string
  gml: { featureUrl: string; namespace: string; wfsVersion: WfsVersion }
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private proxy: ProxyService) {}

  getDownloadUrlsFromWfs(
    wfsUrl: string,
    featureTypeName: string
  ): Observable<WfsDownloadUrls> {
    return from(
      new WfsEndpoint(this.proxy.getProxiedUrl(wfsUrl)).isReady()
    ).pipe(
      catchError((error: FetchError | Error) => {
        if (error instanceof Error) {
          throw new Error(`wfs.unreachable.unknown`)
        } else {
          if (error.type === 'network') {
            throw new Error(`wfs.unreachable.cors`)
          }
          if (error.type === 'http') {
            throw new Error(`wfs.unreachable.http`)
          }
          if (error.type === 'parse') {
            throw new Error(`wfs.unreachable.parse`)
          }
          if (error.type === 'unsupportedType') {
            throw new Error(`wfs.unreachable.unsupportedType`)
          } else {
            throw new Error(`wfs.unreachable.unknown`)
          }
        }
      }),
      map((endpoint) => {
        const featureTypes = endpoint.getFeatureTypes()
        const featureType = endpoint.getFeatureTypeSummary(
          featureTypes.length === 1 && !featureTypeName
            ? featureTypes[0].name
            : featureTypeName
        )
        if (!featureType) {
          throw new Error('wfs.featuretype.notfound')
        }
        return {
          all: featureType.outputFormats.reduce(
            (prev, curr) => ({
              ...prev,
              [curr]: endpoint.getFeatureUrl(featureType.name, {
                outputFormat: curr,
              }),
            }),
            {}
          ),
          geojson: endpoint.supportsJson(featureType.name)
            ? endpoint.getFeatureUrl(featureType.name, {
                outputFormat: 'application/json',
                outputCrs: 'EPSG:4326',
              })
            : null,
          gml:
            featureType.outputFormats.find((f) =>
              f.toLowerCase().includes('gml')
            ) &&
            (featureType.defaultCrs === 'EPSG:4326' ||
              featureType.otherCrs?.includes('EPSG:4326'))
              ? {
                  featureUrl: endpoint.getFeatureUrl(featureType.name, {
                    outputFormat: featureType.outputFormats.find((f) =>
                      f.toLowerCase().includes('gml')
                    ),
                    outputCrs: 'EPSG:4326',
                  }),
                  namespace: featureType.name,
                  wfsVersion: endpoint.getVersion(),
                }
              : null,
        }
      })
    )
  }

  getDownloadUrlFromEsriRest(apiUrl: string, format: string): string {
    return this.proxy.getProxiedUrl(
      `${apiUrl}/query?f=${format}&where=1=1&outFields=*`
    )
  }

  getDownloadLinksFromWfs(
    wfsLink: DatasetServiceDistribution
  ): Observable<DatasetDistribution[]> {
    // Pour DL toutes les données
    return this.getDownloadUrlsFromWfs(
      wfsLink.url.toString(),
      wfsLink.name
    ).pipe(
      map((urls) => urls.all),
      map((urls) =>
        Object.keys(urls).map((format) => ({
          ...wfsLink,
          type: 'download',
          url: new URL(urls[format]),
          mimeType: getMimeTypeForFormat(
            getFileFormatFromServiceOutput(format)
          ),
        }))
      )
    )
  }

  getDownloadLinksFromEsriRest(
    esriRestLink: DatasetServiceDistribution
  ): DatasetDistribution[] {
    return ['json', 'geojson'].map((format) => ({
      ...esriRestLink,
      url: new URL(
        this.getDownloadUrlFromEsriRest(esriRestLink.url.toString(), format)
      ),
      mimeType: getMimeTypeForFormat(getFileFormatFromServiceOutput(format)),
    }))
  }

  readAsGeoJson(link: DatasetDistribution): Observable<FeatureCollection> {
    return this.getDataset(link).pipe(
      switchMap((dataset) => dataset.selectAll().read()),
      map((features) => ({
        type: 'FeatureCollection',
        features,
      }))
    )
  }

  getDataset(link: DatasetDistribution): Observable<BaseReader> {
    if (link.type === 'service' && link.accessServiceProtocol === 'wfs') {
      return this.getDownloadUrlsFromWfs(link.url.toString(), link.name).pipe(
        switchMap((urls) => {
          if (urls.geojson) return openDataset(urls.geojson, 'geojson')
          if (urls.gml)
            return openDataset(urls.gml.featureUrl, 'gml', {
              namespace: urls.gml.namespace,
              wfsVersion: urls.gml.wfsVersion,
            })
          return null
        }),
        tap((url) => {
          if (url === null) {
            throw new Error('wfs.geojsongml.notsupported')
          }
        })
      )
    } else if (link.type === 'download') {
      const linkProxifiedUrl = this.proxy.getProxiedUrl(link.url.toString())
      const format = getFileFormat(link)
      const supportedType =
        SupportedTypes.indexOf(format as any) > -1
          ? (format as SupportedType)
          : undefined
      return from(openDataset(linkProxifiedUrl, supportedType)).pipe()
    } else if (
      link.type === 'service' &&
      link.accessServiceProtocol === 'esriRest'
    ) {
      const url = this.getDownloadUrlFromEsriRest(
        link.url.toString(),
        'geojson'
      )
      return from(openDataset(url, 'geojson')).pipe()
    }
    return throwError(() => 'protocol not supported')
  }
}
