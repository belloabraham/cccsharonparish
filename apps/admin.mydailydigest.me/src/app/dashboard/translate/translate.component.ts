import { Component } from '@angular/core';
import { NewContentComponent } from '../new-content/new-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared';
import { TuiNotification, TuiTextfield } from '@taiga-ui/core';
import { TABLE_MODULES } from '../shared';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TRANSLATE_CONTENT_TABLE_COLUMNS } from './translate-table';

@Component({
  selector: 'app-translate',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    TuiNotification,
    MatTooltipModule,
    ...TABLE_MODULES,
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
})
export class TranslateComponent extends NewContentComponent {
  TRANSLATE_KEY = TRANSLATE_CONTENT_TABLE_COLUMNS;
  translateTableColumns = TRANSLATE_CONTENT_TABLE_COLUMNS;
}
