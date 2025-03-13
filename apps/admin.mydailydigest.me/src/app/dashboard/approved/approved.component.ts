import { Component, computed, signal, Signal } from '@angular/core';
import { SharedModule } from '../../shared';
import { APPROVED_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { TuiTextfield } from '@taiga-ui/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ascDescSortCompare, ColumnKeys, TABLE_MODULES } from '../shared';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewContentComponent } from '../new-content/new-content.component';
import { TRANSLATE_CONTENT_TABLE_COLUMNS } from '../translate/translate-table';
import {
  contentsToTableUIState,
  ENGLISH_LANG_CODE,
  ISpiritualDailyDigestTableUIState,
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
    ...TABLE_MODULES,
  ],
  templateUrl: './approved.component.html',
  styleUrl: './approved.component.scss',
})
export class ApprovedComponent extends NewContentComponent {
  APPROVED_KEY = APPROVED_STRING_RESOURCE_KEY;
  translateTableColumns = TRANSLATE_CONTENT_TABLE_COLUMNS;
  translateData?: Signal<ISpiritualDailyDigestTableUIState[]> = signal([]);

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

  private getData(
    key: ColumnKeys,
    direction: -1 | 1,
    page: number,
    size: number
  ): ReadonlyArray<ISpiritualDailyDigestTableUIState | null> {
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
    const tableUIState = contentsToTableUIState(
      approvedContent,
      ENGLISH_LANG_CODE
    );
    return tableUIState;
  }
}
