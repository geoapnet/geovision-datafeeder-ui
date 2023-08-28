import {
  enableProdMode,
  ENVIRONMENT_INITIALIZER,
  importProvidersFrom,
} from '@angular/core'

import { environment } from './environments/environment'
import {
  getGlobalConfig,
  getOptionalSearchConfig,
  getThemeConfig,
  loadAppConfig,
} from '@geonetwork-ui/util/app-config'
import { enableFallbackWithoutWorker } from '@camptocamp/ogc-client'
import { AppComponent } from './app/app.component'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { RecordPageComponent } from './app/record/record-page/record-page.component'
import { SearchPageComponent } from './app/home/search/search-page/search-page.component'
import { TranslateModule } from '@ngx-translate/core'
import {
  TRANSLATE_DEFAULT_CONFIG,
  UtilI18nModule,
} from '@geonetwork-ui/util/i18n'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { MetaReducer, StoreModule } from '@ngrx/store'
import {
  provideRouter,
  RouteReuseStrategy,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
} from '@angular/router'
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser'
import {
  DEFAULT_RESULTS_LAYOUT_CONFIG,
  RESULTS_LAYOUT_CONFIG,
} from '@geonetwork-ui/ui/search'
import {
  FeatureCatalogModule,
  ORGANIZATION_URL_TOKEN,
} from '@geonetwork-ui/feature/catalog'
import {
  FILTER_GEOMETRY,
  initialState,
  RECORD_URL_TOKEN,
  reducer,
  SEARCH_FEATURE_KEY,
  SearchEffects,
} from '@geonetwork-ui/feature/search'
import { LANGUAGES_LIST } from '@geonetwork-ui/ui/catalog'
import { THUMBNAIL_PLACEHOLDER } from '@geonetwork-ui/ui/elements'
import {
  FeatureRecordModule,
  WEB_COMPONENT_EMBEDDER_URL,
} from '@geonetwork-ui/feature/record'
import { LOGIN_URL } from '@geonetwork-ui/feature/auth'
import {
  getGeometryFromGeoJSON,
  PROXY_PATH,
  ThemeService,
} from '@geonetwork-ui/util/shared'
import { Configuration } from '@geonetwork-ui/data-access/gn4'
import { DatahubRouterService } from './app/router/datahub-router.service'
import {
  ROUTE_PARAMS,
  ROUTER_CONFIG,
  ROUTER_ROUTE_DATASET,
  ROUTER_ROUTE_SEARCH,
  ROUTER_STATE_KEY,
  RouterEffects,
  RouterFacade,
  RouterService,
  SearchRouteReuseStrategy,
} from '@geonetwork-ui/feature/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  FullRouterStateSerializer,
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store'
import {
  ROUTER_ROUTE_HOME,
  ROUTER_ROUTE_NEWS,
  ROUTER_ROUTE_ORGANISATIONS,
} from './app/router/constants'
import { HomePageComponent } from './app/home/home-page/home-page.component'
import { NewsPageComponent } from './app/home/news-page/news-page.component'
import { OrganisationsPageComponent } from './app/home/organisations-page/organisations-page.component'
import { METADATA_LANGUAGE } from '@geonetwork-ui/api/repository'
import { RecordsRepositoryInterface } from '@geonetwork-ui/common/domain/records-repository.interface'
import { Gn4Repository } from '@geonetwork-ui/api/repository/gn4'

if (environment.production) {
  enableProdMode()
}

loadAppConfig().then(() => {
  const metaReducers: MetaReducer[] = !environment.production ? [] : []
  if (getGlobalConfig().PROXY_PATH) {
    // disable worker in ogc-client to allow using a proxy with a Referer check
    enableFallbackWithoutWorker()
  }

  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        BrowserModule,
        StoreModule.forRoot(
          {},
          {
            metaReducers,
            runtimeChecks: {
              strictStateImmutability: false,
              strictActionImmutability: false,
            },
          }
        ),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot(),
        UtilI18nModule,
        TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
        StoreModule.forFeature(SEARCH_FEATURE_KEY, reducer, {
          initialState,
        }),
        StoreModule.forFeature(ROUTER_STATE_KEY, routerReducer),
        StoreRouterConnectingModule.forRoot({
          stateKey: ROUTER_STATE_KEY,
          serializer: FullRouterStateSerializer,
        }),
        EffectsModule.forFeature([RouterEffects]),
        EffectsModule.forFeature([SearchEffects]),
        FeatureRecordModule,
        MatIconModule,
        FormsModule
      ),
      {
        provide: ROUTER_CONFIG,
        useValue: {
          searchStateId: 'mainSearch',
          searchRouteComponent: SearchPageComponent,
          recordRouteComponent: RecordPageComponent,
        },
      },
      {
        provide: RecordsRepositoryInterface,
        useClass: Gn4Repository,
      },
      importProvidersFrom(FeatureRecordModule),
      importProvidersFrom(FeatureCatalogModule),
      importProvidersFrom(BrowserAnimationsModule),
      { provide: RouterService, useClass: DatahubRouterService },
      {
        provide: Configuration,
        useFactory: () =>
          new Configuration({
            basePath: getGlobalConfig().GN4_API_URL,
          }),
      },
      {
        provide: PROXY_PATH,
        useFactory: () => getGlobalConfig().PROXY_PATH,
      },
      {
        provide: LOGIN_URL,
        useFactory: () => getGlobalConfig().LOGIN_URL,
      },
      {
        provide: WEB_COMPONENT_EMBEDDER_URL,
        useFactory: () => getGlobalConfig().WEB_COMPONENT_EMBEDDER_URL,
      },
      {
        provide: METADATA_LANGUAGE,
        useFactory: () => getGlobalConfig().METADATA_LANGUAGE,
      },
      {
        provide: THUMBNAIL_PLACEHOLDER,
        useFactory: () => getThemeConfig().THUMBNAIL_PLACEHOLDER,
      },
      {
        provide: LANGUAGES_LIST,
        useFactory: () => getGlobalConfig().LANGUAGES,
      },
      {
        provide: FILTER_GEOMETRY,
        useFactory: () => {
          if (getOptionalSearchConfig()?.FILTER_GEOMETRY_DATA) {
            return Promise.resolve(
              JSON.parse(getOptionalSearchConfig().FILTER_GEOMETRY_DATA)
            ).then(getGeometryFromGeoJSON)
          }
          if (getOptionalSearchConfig()?.FILTER_GEOMETRY_URL) {
            return fetch(getOptionalSearchConfig().FILTER_GEOMETRY_URL)
              .then((resp) => resp.json())
              .then(getGeometryFromGeoJSON)
          }
          return null
        },
      },
      {
        provide: RECORD_URL_TOKEN,
        useValue: `${ROUTER_ROUTE_DATASET}/\${uuid}`,
      },
      {
        provide: ORGANIZATION_URL_TOKEN,
        useValue: `${ROUTER_ROUTE_SEARCH}?${ROUTE_PARAMS.PUBLISHER}=\${name}`,
      },
      {
        provide: RESULTS_LAYOUT_CONFIG,
        useValue: DEFAULT_RESULTS_LAYOUT_CONFIG,
      },
      RouterFacade,
      {
        provide: RouteReuseStrategy,
        useClass: SearchRouteReuseStrategy,
      },
      {
        provide: ENVIRONMENT_INITIALIZER,
        multi: true,
        useValue() {
          ThemeService.applyCssVariables(
            getThemeConfig().PRIMARY_COLOR,
            getThemeConfig().SECONDARY_COLOR,
            getThemeConfig().MAIN_COLOR,
            getThemeConfig().BACKGROUND_COLOR,
            getThemeConfig().MAIN_FONT || "'Rubik', sans-serif",
            getThemeConfig().TITLE_FONT || "'Readex Pro', sans-serif",
            getThemeConfig().FONTS_STYLESHEET_URL ||
              'https://fonts.googleapis.com/css2?family=Readex+Pro&family=Rubik&display=swap'
          )
          ThemeService.generateBgOpacityClasses(
            'primary',
            getThemeConfig().PRIMARY_COLOR,
            [10, 25, 50, 75, 100]
          )
        },
      },
      provideRouter(
        [
          {
            path: ROUTER_ROUTE_HOME,
            redirectTo: ``,
            pathMatch: 'prefix',
          },
          {
            path: '',
            component: HomePageComponent,
            data: {
              shouldDetach: true,
            },
            children: [
              {
                path: '',
                redirectTo: ROUTER_ROUTE_NEWS,
                pathMatch: 'prefix',
              },
              {
                path: ROUTER_ROUTE_NEWS,
                component: NewsPageComponent,
                data: {
                  shouldDetach: true,
                },
              },
              {
                path: ROUTER_ROUTE_SEARCH,
                component: SearchPageComponent,
                data: {
                  shouldDetach: true,
                },
              },
              {
                path: ROUTER_ROUTE_ORGANISATIONS,
                component: OrganisationsPageComponent,
                data: {
                  shouldDetach: true,
                },
              },
            ],
          },
          {
            path: `${ROUTER_ROUTE_DATASET}/:metadataUuid`,
            component: RecordPageComponent,
          },
        ],
        withEnabledBlockingInitialNavigation(),
        withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
      ),
    ],
  }).catch((err) => console.error(err))
})
