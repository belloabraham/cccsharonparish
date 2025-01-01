import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TuiNavigation } from '@taiga-ui/layout';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import { DASHBOARD_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { DashboardService } from './dashboard.service';
import { AsyncPipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment';
import { TuiDrawer, TuiChevron, TuiBreadcrumbs, TuiFade } from '@taiga-ui/kit';
import { TuiLink, TuiPopup } from '@taiga-ui/core';
import { MatRippleModule } from '@angular/material/core';
import { Language, ROUTE } from '@cccsharonparish/mydailydigest';
import { TuiItem, TuiRepeatTimes } from '@taiga-ui/cdk';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    TuiNavigation,
    AsyncPipe,
    TuiPopup,
    NgIf,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    TuiDrawer,
    RouterLinkActive,
    MatRippleModule,
    SharedModule,
    TuiChevron,
    RouterLink,
    TuiBreadcrumbs,
    NgFor,
    NgIf,
    TuiFade,
    TuiLink,
    TuiItem,
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
  expandSideNav = signal(true);
  appName = environment.appName;
  readonly openSideDrawer = signal(false);
  KEY = DASHBOARD_STRING_RESOURCE_KEY;
  ROUTE = ROUTE;
  supportedLanguages = signal<Language[]>([
    {
      label: 'Yoruba',
      code: 'yr',
    },
    {
      label: 'English',
      code: 'en',
    },
    {
      label: 'French',
      code: 'fr',
    },
  ]);

  protected readonly breadcrumbs = [
    'Home',
    'Angular',
    'Repositories',
    'Taiga UI',
  ];

  onClose() {
    this.openSideDrawer.set(false);
  }

  toggleTheme() {
    this.dashboardService.toggleTheme();
  }
}
