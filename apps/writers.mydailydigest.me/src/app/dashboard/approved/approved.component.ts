import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
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
  ROUTE,
} from '@cccsharonparish/mydailydigest';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { ApprovedService } from './approved.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approved',
  host: { style: 'display: block;' },
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
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ApprovedComponent extends NewContentComponent implements OnInit {
  APPROVED_KEY = APPROVED_STRING_RESOURCE_KEY;
  translateTableColumns = TRANSLATE_CONTENT_TABLE_COLUMNS;
  approvedContentData?: Signal<IApprovedTableUIState[]> = signal([]);
  approvedService = inject(ApprovedService);
  private readonly router = inject(Router);

  constructor() {
    super();
    this.approvedContentData = computed(() =>
      this.getData(
        this.sortColumnBy(),
        this.orderDirection(),
        this.tablePage(),
        this.tablePageSize()
      ).filter(tuiIsPresent)
    );
  }

  ngOnInit(): void {
    const thereAreNoContents =
      this.contentStore.approvedContent().length === 0;
    if (thereAreNoContents) {
      this.router.navigate([ROUTE.NEW, ENGLISH_LANG_CODE]);
    }
  }

  publishPrompt(item: IApprovedTableUIState) {
    const topic = this.getEnglishContent(item).text.topic;
    this.alertDialogService
      .open(`Are you sure you want to publish "${topic}?"`, {
        heading: 'Publish content?',
        buttons: [
          this.languageResourceService.getString(this.KEY.YES),
          this.languageResourceService.getString(this.KEY.NO),
        ],
      })
      .subscribe({
        next: async (isYes) => {
          if (isYes) {
            await this.publish(item, topic);
          }
        },
      });
  }

  async publish(approvedContent: ISpiritualDailyDigest, topic: string) {
    try {
      this.httpRequestProgressIndicatorService.showLoader();
      await this.approvedService.publish(approvedContent);
      this.showPublishSuccessAlert(`${topic} was successfully published`);
      const remainingApprovedContent = this.contentStore
        .approvedContent()
        .filter((content) => content.id !== approvedContent.id);
      this.contentStore.updateApprovedContents(remainingApprovedContent);
      if (remainingApprovedContent.length === 0) {
        this.router.navigate([ROUTE.PUBLISHED]);
      }
    } catch (error) {
      this.showPublishFailedAlert(
        `Unable to publish ${topic}, check your internet connection and try again.`
      );
    } finally {
      this.httpRequestProgressIndicatorService.hideLoader();
    }
  }

  async publishAll() {
    try {
      this.httpRequestProgressIndicatorService.showLoader();
      await this.approvedService.publishAll(this.approvedContentData!());
      this.showPublishSuccessAlert(
        `All approved content was published successfully`
      );
      this.contentStore.updateApprovedContents([]);
      this.router.navigate([ROUTE.PUBLISHED]);
    } catch (error) {
      this.showPublishFailedAlert(
        'Unable to publish approved contents, check your internet connection and try again.'
      );
    } finally {
      this.httpRequestProgressIndicatorService.hideLoader();
    }
  }

  showPublishSuccessAlert(message: string) {
    this.alertService
      .open('Published', {
        label: message,
        appearance: 'positive',
      })
      .subscribe();
  }

  showPublishFailedAlert(message: string) {
    this.alertService
      .open('Error', {
        label: message,
        appearance: 'negative',
      })
      .subscribe();
  }

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
            await this.publishAll();
          }
        },
      });
  }

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
