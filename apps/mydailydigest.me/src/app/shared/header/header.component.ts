import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @HostBinding('style.height') height = '100%';
  ROUTE = ROUTE;
}
