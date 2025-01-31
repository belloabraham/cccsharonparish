import { Component, HostBinding, inject, input } from '@angular/core';
import { SharedModule } from '../../../shared';
import { PUBLISHED_CONTENT_LIST_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { TuiFlagPipe } from '@taiga-ui/core/pipes/flag';
import type { TuiLanguageName } from '@taiga-ui/i18n/types';
import { TuiLanguageSwitcherService } from '@taiga-ui/i18n/utils';
import { TuiBadge } from '@taiga-ui/kit/components/badge';
import { TuiBadgedContent } from '@taiga-ui/kit/components/badged-content';
import { TuiButtonSelect } from '@taiga-ui/kit/directives/button-select';

import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import type {
  TuiComparator,
  TuiTablePaginationEvent,
} from '@taiga-ui/addon-table';
import { TuiTable, TuiTablePagination } from '@taiga-ui/addon-table';
import {
  TUI_DEFAULT_MATCHER,
  tuiDefaultSort,
  tuiIsFalsy,
  tuiIsPresent,
  TuiLet,
} from '@taiga-ui/cdk';
import {
  TuiButton,
  TuiDropdown,
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
  DEFAULT_LANG_CODE,
  ISpiritualDailyDigestTableUIState,
} from '@cccsharonparish/mydailydigest';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';

type Key = keyof ISpiritualDailyDigestTableUIState;

function sortBy(
  key: Key,
  direction: -1 | 1
): TuiComparator<ISpiritualDailyDigestTableUIState> {
  return (a, b) => direction * tuiDefaultSort(a[key], b[key]);
}

function capitalize(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

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
  readonly TABLE_PAGINATED_SIZE = 31;

  protected readonly switcher = inject(TuiLanguageSwitcherService);
  protected readonly languageFC = new FormControl(
    capitalize(this.switcher.language)
  );

  public readonly names: TuiLanguageName[] = Array.from(
    this.dashboardStore
      .supportedLanguages()
      .languages.map((lang) => lang.label.toLowerCase())
  );

  private readonly size$ = new BehaviorSubject(this.TABLE_PAGINATED_SIZE);
  protected readonly page$ = new BehaviorSubject(0);
  private readonly language$ = new BehaviorSubject(DEFAULT_LANG_CODE);
  protected readonly direction$ = new BehaviorSubject<-1 | 1>(-1);

  sddStateKeys: ISpiritualDailyDigestTableUIState = {
    sn: 0,
    topic: '',
    message: '',
    reference: '',
    date: '',
    imageUrl: '',
    audioUrl: '',
  };
  protected columns = Object.keys(
    this.sddStateKeys
  ) as (keyof ISpiritualDailyDigestTableUIState)[];
  protected readonly sorter$ = new BehaviorSubject<Key | any>('');

  protected readonly request$ = combineLatest([
    this.sorter$,
    this.direction$,
    this.language$,
    this.page$,
    this.size$,
  ]).pipe(
    switchMap((query) => this.getData(...query)),
    share()
  );

  protected search = '';

  protected readonly data$: Observable<
    readonly ISpiritualDailyDigestTableUIState[]
  > = this.request$.pipe(
    filter(tuiIsPresent),
    map((data) => data.filter(tuiIsPresent)),
    startWith([])
  );

  protected onDirection(direction: -1 | 1): void {
    this.direction$.next(direction);
  }

  protected onPagination({ page, size }: TuiTablePaginationEvent): void {
    console.error('Page ', page);
    console.error('Size ', size);

    this.page$.next(page);
    this.size$.next(size);
  }

  protected isMatch(value: unknown): boolean {
    return !!this.search && TUI_DEFAULT_MATCHER(value, this.search);
  }

  private getData(
    key: Key,
    direction: -1 | 1,
    languageCode: string,
    page: number,
    size: number
  ): Observable<ReadonlyArray<ISpiritualDailyDigestTableUIState | null>> {
    const start = page * size;
    const end = start + size;
    console.error('Start ', start);
    console.error('End ', end);

    const result = [...this.getTableUIState(languageCode, start, end)].sort(
      sortBy(key, direction)
    );
    return of(result);
  }

  public setLang(lang: TuiLanguageName): void {
    this.languageFC.setValue(lang);
    this.switcher.setLanguage(lang);
  }

  getTableUIState(languageCode: string, start: number, end: number) {
    const publishedContent =
      this.publishedContentStore.publishedContentsByAYear();
    return publishedContent
      .filter((data, index) => {
        return index >= start && index < end;
      })
      .map((contentState, index) => {
        const content = contentState.content.find(
          (c) => c.language.code === languageCode
        )!;
        const date = new Date(
          contentState.year,
          contentState.month - 1,
          contentState.day
        ).toDateString();
        const tableState: ISpiritualDailyDigestTableUIState = {
          sn: index + start + 1,
          topic: content.text.topic,
          message: content.text.message,
          reference: content.text.bibleVerse.reference,
          date: date,
          imageUrl: contentState.imageUrl,
          audioUrl: content.audioUrl,
        };
        return tableState;
      });
  }
}
