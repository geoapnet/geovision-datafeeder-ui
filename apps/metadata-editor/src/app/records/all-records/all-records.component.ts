import { CommonModule } from '@angular/common'
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { SearchFacade, SearchService } from '@geonetwork-ui/feature/search'
import { TranslateModule } from '@ngx-translate/core'
import { Router } from '@angular/router'
import { RecordsCountComponent } from '../records-count/records-count.component'
import { Observable, Subscription } from 'rxjs'
import { UiElementsModule } from '@geonetwork-ui/ui/elements'
import { UiInputsModule } from '@geonetwork-ui/ui/inputs'
import { CdkOverlayOrigin, Overlay, OverlayRef } from '@angular/cdk/overlay'
import { TemplatePortal } from '@angular/cdk/portal'
import { ImportRecordComponent } from '@geonetwork-ui/feature/editor'
import { RecordsListComponent } from '../records-list.component'
import { map, take } from 'rxjs/operators'
import { SearchFiltersComponent } from '../../dashboard/search-filters/search-filters.component'
import {
  NgIconComponent,
  provideIcons,
  provideNgIconsConfig,
} from '@ng-icons/core'
import {
  iconoirNavArrowDown,
  iconoirNavArrowUp,
  iconoirPagePlus,
} from '@ng-icons/iconoir'

@Component({
  selector: 'md-editor-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RecordsCountComponent,
    UiElementsModule,
    UiInputsModule,
    ImportRecordComponent,
    CdkOverlayOrigin,
    RecordsListComponent,
    SearchFiltersComponent,
    NgIconComponent,
  ],
  providers: [
    provideIcons({
      iconoirNavArrowDown,
      iconoirNavArrowUp,
      iconoirPagePlus,
    }),
    provideNgIconsConfig({
      size: '1.5rem',
    }),
  ],
})
export class AllRecordsComponent implements OnInit, OnDestroy {
  @ViewChild('importRecordButton', { read: ElementRef })
  importRecordButton!: ElementRef
  @ViewChild('template') template!: TemplateRef<any>
  private overlayRef!: OverlayRef
  searchFields = ['user', 'changeDate']
  searchText$: Observable<string | null>
  subscription: Subscription

  isImportMenuOpen = false

  constructor(
    private router: Router,
    public searchFacade: SearchFacade,
    public searchService: SearchService,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.searchFacade.searchFilters$
      .pipe(
        map((filters) => {
          if ('owner' in filters) {
            const { owner, ...rest } = filters
            return rest
          }
          return filters
        }),
        take(1)
      )
      .subscribe((filters) => {
        this.searchService.setFilters(filters)
      })
    this.searchText$ = this.searchFacade.searchFilters$.pipe(
      map((filters) => ('any' in filters ? (filters['any'] as string) : null))
    )
  }

  ngOnDestroy() {
    this.searchFacade.updateFilters({ any: '' })
    this.subscription.unsubscribe()
  }

  createRecord() {
    this.router.navigate(['/create']).catch((err) => console.error(err))
  }

  duplicateExternalRecord() {
    this.isImportMenuOpen = true

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.importRecordButton)
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ])

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    })

    const portal = new TemplatePortal(this.template, this.viewContainerRef)

    this.overlayRef.attach(portal)

    this.overlayRef.backdropClick().subscribe(() => {
      this.closeImportMenu()
    })
  }

  closeImportMenu() {
    if (this.overlayRef) {
      this.isImportMenuOpen = false
      this.overlayRef.dispose()
      this.cdr.markForCheck()
    }
  }
}
