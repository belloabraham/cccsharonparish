import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-published-content',
  imports: [RouterOutlet],
  templateUrl: './published-content.component.html',
  styleUrl: './published-content.component.scss',
})
export class PublishedContentComponent {
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'block';
}
