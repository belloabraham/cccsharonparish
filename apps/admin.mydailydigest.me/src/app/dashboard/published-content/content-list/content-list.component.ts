import { Component, HostBinding, inject, input } from '@angular/core';
import { SharedModule } from '../../../shared';
import { PUBLISHED_CONTENT_LIST_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { TuiFlagPipe } from '@taiga-ui/core/pipes/flag';
import { TuiLanguageSwitcherService } from '@taiga-ui/i18n/utils';
import { TuiBadge } from '@taiga-ui/kit/components/badge';
import { TuiBadgedContent } from '@taiga-ui/kit/components/badged-content';
import { TuiButtonSelect } from '@taiga-ui/kit/directives/button-select';

import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import type { TuiTablePaginationEvent } from '@taiga-ui/addon-table';
import { TuiTable, TuiTablePagination } from '@taiga-ui/addon-table';
import { TUI_DEFAULT_MATCHER, tuiIsPresent, TuiLet } from '@taiga-ui/cdk';
import {
  TuiButton,
  TuiTextfield,
  TuiWithTextfieldDropdown,
} from '@taiga-ui/core';
import type { Observable } from 'rxjs';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  of,
  share,
  startWith,
  switchMap,
} from 'rxjs';
import { DashboardStore } from '../../dashboard.store';
import { PublishedContentStore } from '../published-content-store';
import {
  contentsToTableUIState,
  DEFAULT_LANG_CODE,
  ISpiritualDailyDigestTableUIState,
  Language,
} from '@cccsharonparish/mydailydigest';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { NgAudioPlayerComponent } from '@cccsharonparish/angular';
import {
  ascDescSortCompare,
  ColumnKeys,
  PUBLISHED_TABLE_COLUMNS,
  TABLE_PAGE_SIZE,
} from '../../shared';

@Component({
  selector: 'app-content-list',
  imports: [
    SharedModule,
    TuiTextfield,
    TuiWithTextfieldDropdown,
    CdkFixedSizeVirtualScroll,
    CdkVirtualScrollViewport,
    TuiBadge,
    TuiBadgedContent,
    TuiButton,
    TuiButtonSelect,
    TuiDataList,
    TuiFlagPipe,
    TuiTextfield,
    AsyncPipe,
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    TuiButton,
    TuiLet,
    TuiTable,
    TuiTablePagination,
    NgAudioPlayerComponent,
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'block';

  contentYear = input.required<string>({
    alias: 'contentYear',
  });

  KEY = PUBLISHED_CONTENT_LIST_STRING_RESOURCE_KEY;
  dashboardStore = inject(DashboardStore);
  publishedContentStore = inject(PublishedContentStore);

  readonly languageSwitcher = inject(TuiLanguageSwitcherService);
  readonly languageFC = new FormControl(
    this.dashboardStore.supportedLanguages().languages[0].countryCode
  );

  private readonly tablePageSize$ = new BehaviorSubject(TABLE_PAGE_SIZE);
  readonly tablePage$ = new BehaviorSubject(0);
  private readonly languageCode$ = new BehaviorSubject(DEFAULT_LANG_CODE);
  readonly orderDirection$ = new BehaviorSubject<-1 | 1>(-1);
  readonly sortColumnBy$ = new BehaviorSubject<any>(null);
  tableColumns = PUBLISHED_TABLE_COLUMNS;
  TABLE_PAGE_SIZE = TABLE_PAGE_SIZE;

  readonly data$ = combineLatest([
    this.sortColumnBy$,
    this.orderDirection$,
    this.languageCode$,
    this.tablePage$,
    this.tablePageSize$,
  ]).pipe(
    switchMap((query) => this.getData(...query)),
    share(),
    filter(tuiIsPresent),
    map((data) => data.filter(tuiIsPresent)),
    startWith([])
  );

  searchQuery = '';

  onPagination({ page, size }: TuiTablePaginationEvent): void {
    this.tablePage$.next(page);
    this.tablePageSize$.next(size);
  }

  isMatch(value: unknown): boolean {
    return !!this.searchQuery && TUI_DEFAULT_MATCHER(value, this.searchQuery);
  }

  private getData(
    key: ColumnKeys,
    direction: -1 | 1,
    languageCode: string,
    page: number,
    size: number
  ): Observable<ReadonlyArray<ISpiritualDailyDigestTableUIState | null>> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(languageCode, start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return of(result);
  }

  public setLang(lang: Language): void {
    this.languageCode$.next(lang.code);
    this.languageFC.setValue(lang.countryCode);
    this.languageSwitcher.setLanguage(lang.countryCode);
  }

  getTableUIState(languageCode: string, start: number, end: number) {
    const publishedContent = this.publishedContentStore
      .publishedContentsByAYear()
      .filter((data, index) => {
        return index >= start && index < end;
      });
    const tableUIState = contentsToTableUIState(publishedContent, languageCode);
    return tableUIState;
  }
}
