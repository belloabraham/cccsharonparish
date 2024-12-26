import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiNavigation } from '@taiga-ui/layout';
import { CommonComponent, PAGE_TITLE_KEY } from '../shared';
import { DASHBOARD_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { DashboardService } from './dashboard.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    TuiNavigation,
    AsyncPipe,
    NgIf,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [
    {
      provide: PAGE_TITLE_KEY,
      useValue: DASHBOARD_STRING_RESOURCE_KEY.PAGE_TITLE,
    },
  ],
})
export class DashboardComponent extends CommonComponent {
  readonly dashboardService = inject(DashboardService);
  minimizeSideNav = signal(false);

  toggleTheme() {
    this.dashboardService.toggleTheme();
  }
}
