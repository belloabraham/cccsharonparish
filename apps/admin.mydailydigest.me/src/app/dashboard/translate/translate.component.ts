import { Component, computed, Signal, signal } from '@angular/core';
import { NewContentComponent } from '../new-content/new-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared';
import { TuiTextfield } from '@taiga-ui/core';
import { ascDescSortCompare, ColumnKeys, TABLE_MODULES } from '../shared';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TRANSLATE_CONTENT_TABLE_COLUMNS } from './translate-table';
import {
  contentsToTableUIState,
  ENGLISH_LANG_CODE,
  ISpiritualDailyDigestTableUIState,
} from '@cccsharonparish/mydailydigest';
import { tuiIsPresent } from '@taiga-ui/cdk';

@Component({
  selector: 'app-translate',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ...TABLE_MODULES,
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
})
export class TranslateComponent extends NewContentComponent {
  TRANSLATE_KEY = TRANSLATE_CONTENT_TABLE_COLUMNS;
  translateTableColumns = TRANSLATE_CONTENT_TABLE_COLUMNS;
  translateData?: Signal<ISpiritualDailyDigestTableUIState[]> = signal([]);

  constructor() {
    super();
    this.translateData = computed(() =>
      this._getData(
        this.sortColumnBy(),
        this.orderDirection(),
        this.tablePage(),
        this.tablePageSize()
      ).filter(tuiIsPresent)
    );
  }

  private _getData(
    key: ColumnKeys,
    direction: -1 | 1,
    page: number,
    size: number
  ): ReadonlyArray<ISpiritualDailyDigestTableUIState | null> {
    const start = page * size;
    const end = start + size;
    const result = [...this._getTableUIState(start, end)].sort(
      ascDescSortCompare(key, direction)
    );
    return result;
  }

  _getTableUIState(start: number, end: number) {
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
