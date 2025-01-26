import { Component } from '@angular/core';
import { NewContentComponent } from '../new-content/new-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared';
import { TuiTextfield } from '@taiga-ui/core';
import { NgIf } from '@angular/common';
import { EmptyStatusComponent } from '../shared';

@Component({
  selector: 'app-translate',
  imports: [
    SharedModule,
    TuiTextfield,
    MatButtonModule,
    MatIconModule,
    EmptyStatusComponent,
    NgIf,
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
})
export class TranslateComponent extends NewContentComponent {}
