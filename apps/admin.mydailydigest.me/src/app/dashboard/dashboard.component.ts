import { Component, effect, inject, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { TuiNavigation } from '@taiga-ui/layout';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import { DASHBOARD_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { DashboardService, IBreadCrumb } from './dashboard.service';
import {
  AsyncPipe,
  NgFor,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet,
} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment';
import {
  TuiDrawer,
  TuiChevron,
  TuiBreadcrumbs,
  TuiFade,
  TuiAvatar,
} from '@taiga-ui/kit';
import { TuiLink, TuiPopup, TuiFallbackSrcPipe } from '@taiga-ui/core';
import { MatRippleModule } from '@angular/material/core';
import { Language, ROUTE } from '@cccsharonparish/mydailydigest';
import { TuiItem } from '@taiga-ui/cdk';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeType } from '@cccsharonparish/angular';
import { distinctUntilChanged, filter, Subscription } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    MatMenuModule,
    TuiAvatar,
    TuiFallbackSrcPipe,
    NgTemplateOutlet,
    MatSlideToggleModule,
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
  readonly router = inject(Router);
  breadcrumbs = signal<IBreadCrumb[]>([]);

  expandSideNav = signal(true);
  appName = environment.appName;
  readonly openSideDrawer = signal(false);
  KEY = DASHBOARD_STRING_RESOURCE_KEY;
  ROUTE = ROUTE;
  themes: any[] = [this.KEY.LIGHT, this.KEY.DARK, this.KEY.DEVICE];
  navEndSubscription = Subscription.EMPTY;
  navStartSubscription = Subscription.EMPTY;

  private activatedRoute = inject(ActivatedRoute);

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

  constructor() {
    super();
    this.onNavigationStart();
    this.onNavigationEnd();
    effect(() => {
      if (this.appStore.language().loaded) {
        this.breadcrumbs.set(
          this.dashboardService.createBreadCrumbs(
            this.activatedRoute,
            this.supportedLanguages()
          )
        );
      }
    });
  }

  closeSideDrawer() {
    this.openSideDrawer.set(false);
  }

  onNavigationEnd() {
    this.navEndSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs.set(
          this.dashboardService.createBreadCrumbs(
            this.activatedRoute,
            this.supportedLanguages()
          )
        );
      });
  }

  onNavigationStart() {
    this.navStartSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        this.closeSideDrawer();
      });
  }

  logout() {
    this.dashboardService.logout().subscribe({
      next: () => {
        this.router.navigate([ROUTE.ROOT]);
      },
    });
  }

  setTheme(themeType: ThemeType) {
    this.dashboardService.setTheme(themeType);
  }
}
