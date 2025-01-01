import { Component, input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  selector: 'app-new-content',
  imports: [SharedModule],
  templateUrl: './new-content.component.html',
  styleUrl: './new-content.component.scss',
})
export class NewContentComponent  {
  languageCode = input.required<string>({
    alias: 'languageCode',
  });


}
