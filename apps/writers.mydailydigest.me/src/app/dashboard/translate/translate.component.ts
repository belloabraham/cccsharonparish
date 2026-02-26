import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { NewContentComponent } from '../new-content/new-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared';
import { TuiTextfield } from '@taiga-ui/core';
import {
  ascDescSortCompare,
  MODULES_FOR_COMPONENTS_USING_TABLES,
} from '../shared';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TRANSLATE_CONTENT_TABLE_COLUMNS } from './translate-table';
import {
  contentsToTranslateTableUIState,
  ENGLISH_LANG_CODE,
  ISpiritualDailyDigestTranslateUIState,
  ISpiritualDailyDigestUIState,
  LanguageContent,
  ROUTE,
} from '@cccsharonparish/mydailydigest';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { CommonModule } from '@angular/common';
import { COLLECTION, STORAGE_PATH } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-translate',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    ...MODULES_FOR_COMPONENTS_USING_TABLES,
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class TranslateComponent extends NewContentComponent implements OnInit {
  TRANSLATE_KEY = TRANSLATE_CONTENT_TABLE_COLUMNS;
  translateTableColumns = TRANSLATE_CONTENT_TABLE_COLUMNS;
  translateData?: Signal<ISpiritualDailyDigestTranslateUIState[]> = signal([]);
  private readonly router = inject(Router);

  constructor() {
    super();
    this.translateData = computed(() =>
      this.getData(
        this.sortColumnBy(),
        this.orderDirection(),
        this.tablePage(),
        this.tablePageSize()
      ).filter(tuiIsPresent)
    );
  }

  ngOnInit(): void {
    const thereAreNoContents = this.contentStore.approvedContent().length === 0;
    if (thereAreNoContents) {
      this.router.navigate([ROUTE.NEW, ENGLISH_LANG_CODE]);
    }
  }

  getExistingContent(id: string) {
    return this.contentStore
      .approvedContent()
      .find((content) => content.id === id)!;
  }

  translate(
    existingContentTranslateUIState: ISpiritualDailyDigestTranslateUIState,
    languageContent: LanguageContent
  ) {
    const id = existingContentTranslateUIState.id;
    const existingSDDContent = this.getExistingContent(id);
    const existingContentUIState: ISpiritualDailyDigestUIState = {
      id: id,
      topic: languageContent.topic,
      message: languageContent.message,
      reference: languageContent.reference,
      verses: languageContent.verses,
      keyVerse: languageContent.keyVerse,
      tags: existingContentTranslateUIState.tags,
      date: existingContentTranslateUIState.date,
      imagePath: existingContentTranslateUIState.imagePath,
      audioUrl: languageContent.audioUrl,
      supplication: languageContent.topic,
      reflection: languageContent.topic,
      isAwaitingApproval: false,
    };
    this.openContentDialog(
      existingContentUIState,
      existingSDDContent,
      existingContentTranslateUIState.englishContent,
      STORAGE_PATH.PUBLISHED,
      COLLECTION.APPROVED
    );
  }

  private getData(
    key: keyof ISpiritualDailyDigestTranslateUIState,
    direction: -1 | 1,
    page: number,
    size: number
  ): ReadonlyArray<ISpiritualDailyDigestTranslateUIState | null> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return result;
  }

  getTableUIState(start: number, end: number) {
    const approvedContent = this.contentStore
      .approvedContent()
      .filter((data, index) => {
        return index >= start && index < end;
      });
    const tableUIState = contentsToTranslateTableUIState(
      approvedContent,
      this.languageCode()
    );
    return tableUIState;
  }
}
