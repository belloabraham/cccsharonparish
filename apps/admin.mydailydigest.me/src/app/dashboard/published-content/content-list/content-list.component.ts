import { Component } from '@angular/core';
import { SharedModule } from '../../../shared';

@Component({
  selector: 'app-content-list',
  imports: [SharedModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {}
