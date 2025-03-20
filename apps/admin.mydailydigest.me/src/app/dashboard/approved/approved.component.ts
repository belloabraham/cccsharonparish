import { Component, computed, signal, Signal } from '@angular/core';
import { SharedModule } from '../../shared';
import { APPROVED_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { TuiTextfield } from '@taiga-ui/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  ascDescSortCompare,
  ColumnKeys,
  MODULES_FOR_COMPONENTS_USING_TABLES,
} from '../shared';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewContentComponent } from '../new-content/new-content.component';
import { TRANSLATE_CONTENT_TABLE_COLUMNS } from '../translate/translate-table';
import {
  ENGLISH_LANG_CODE,
  IApprovedTableUIState,
  ISpiritualDailyDigest,
} from '@cccsharonparish/mydailydigest';
import { tuiIsPresent } from '@taiga-ui/cdk';

@Component({
  selector: 'app-approved',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ...MODULES_FOR_COMPONENTS_USING_TABLES,
  ],
  templateUrl: './approved.component.html',
  styleUrl: './approved.component.scss',
})
export class ApprovedComponent extends NewContentComponent {
  APPROVED_KEY = APPROVED_STRING_RESOURCE_KEY;
  translateTableColumns = TRANSLATE_CONTENT_TABLE_COLUMNS;
  translateData?: Signal<IApprovedTableUIState[]> = signal([]);

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

  publishPrompt(item: IApprovedTableUIState) {
    const englishContent = this.getEnglishContent(item);
    this.alertDialogService
      .open(`Are you sure you want to publish ${englishContent.text.topic}?`, {
        heading: 'Publish content?',
        buttons: [
          this.languageResourceService.getString(this.KEY.YES),
          this.languageResourceService.getString(this.KEY.NO),
        ],
      })
      .subscribe({
        next: async (isYes) => {
          if (isYes) {
            this.publish(item);
          }
        },
      });
  }

  publish(item: ISpiritualDailyDigest) {}

  getEnglishContent(value: ISpiritualDailyDigest) {
    const englishContent = value.contents.find(
      (content) => content.language.code === ENGLISH_LANG_CODE
    );
    return englishContent!;
  }

  publishAllPrompt() {
    this.alertDialogService
      .open(`Are you sure you want to publish all approved content?`, {
        heading: 'Publish all?',
        buttons: [
          this.languageResourceService.getString(this.KEY.YES),
          this.languageResourceService.getString(this.KEY.NO),
        ],
      })
      .subscribe({
        next: async (isYes) => {
          if (isYes) {
          }
        },
      });
  }

  publishAll() {}

  private getData(
    key: ColumnKeys,
    direction: -1 | 1,
    page: number,
    size: number
  ): ReadonlyArray<IApprovedTableUIState | null> {
    const start = page * size;
    const end = start + size;
    const result = [...this.getTableUIState(start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return result;
  }

  getTableUIState(start: number, end: number) {
    const approvedContents = this.contentStore
      .approvedContent()
      .filter((data, index) => {
        return index >= start && index < end;
      });

    const approvedContentUIStates: IApprovedTableUIState[] = [];
    for (let index = 0; index < approvedContents.length; index++) {
      const approvedContent = approvedContents[index];
      const date = new Date(
        approvedContent.year,
        approvedContent.month - 1,
        approvedContent.day
      );
      approvedContentUIStates.push({
        sn: index + 1,
        date: date,
        ...approvedContent,
      });
    }
    return approvedContentUIStates;
  }
}
