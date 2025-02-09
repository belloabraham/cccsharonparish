import {
  Component,
  computed,
  effect,
  inject,
  Signal,
  signal,
} from '@angular/core';
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
import {
  CommonComponent,
  PAGE_TITLE_KEY,
  SharedModule,
  UserDataStore,
} from '../shared';
import { DASHBOARD_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { DashboardService, IBreadCrumb } from './dashboard.service';
import {
  AsyncPipe,
  NgClass,
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
import {
  TuiLink,
  TuiPopup,
  TuiFallbackSrcPipe,
  TuiExpand,
  TUI_SCROLLBAR_OPTIONS,
} from '@taiga-ui/core';
import { MatRippleModule } from '@angular/material/core';
import {
  DEFAULT_LANG_CODE,
  Language,
  ROUTE,
} from '@cccsharonparish/mydailydigest';
import { TuiItem } from '@taiga-ui/cdk';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeType } from '@cccsharonparish/angular';
import { distinctUntilChanged, filter } from 'rxjs';
import { DashboardStore } from './dashboard.store';
import { ContentStore } from './shared';
import { EditorsStore } from './editors/editors.store';

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
    TuiExpand,
    NgClass,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [
    {
      provide: PAGE_TITLE_KEY,
      useValue: DASHBOARD_STRING_RESOURCE_KEY.PAGE_TITLE,
    },
    {
      provide: TUI_SCROLLBAR_OPTIONS,
      useValue: {
        mode: 'always',
      },
    },
  ],
})
export class DashboardComponent extends CommonComponent {
  readonly dashboardService = inject(DashboardService);
  readonly router = inject(Router);
  breadcrumbs = signal<IBreadCrumb[]>([]);
  expandSideNav = signal(true);
  expandMobileDropdown = signal(false);
  openSideDrawer = signal(false);
  readonly dashboardStore = inject(DashboardStore);
  readonly userDataStore = inject(UserDataStore);
  readonly contentStore = inject(ContentStore);
  readonly editorsStore = inject(EditorsStore);

  nonEnglishSupportedLanguages!: Signal<Language[]>;

  appName = environment.appName;
  KEY = DASHBOARD_STRING_RESOURCE_KEY;
  ROUTE = ROUTE;
  themes: any[] = [this.KEY.LIGHT, this.KEY.DARK, this.KEY.DEVICE];
  private activatedRoute = inject(ActivatedRoute);
  DEFAULT_LANG_CODE = DEFAULT_LANG_CODE;

  // const approvedContents$ = inject(ContentStore).getApprovedContents();

  constructor() {
    super();
    this.onNavigationStart();
    this.onNavigationEnd();

    this.updateNonEnglishLanguages();

    effect(() => {
      if (this.appStore.language().loaded) {
        this.setBreadCrumb();
      }
    });

    if (this.isPublisher()) {
      this.loadContentsAwaitingApproval();
      this.loadEditors();
    }
    this.loadApprovedContents();
  }

  loadEditors() {
    this.editorsStore.getEditors().subscribe();
  }

  loadContentsAwaitingApproval() {
    this.contentStore.getContentsAwaitingApproval().subscribe();
  }

  loadApprovedContents() {
    this.contentStore.getApprovedContents().subscribe();
  }

  isPublisher() {
    const userType = this.userDataStore.user()?.userType;
    return userType === 'Publisher' || userType === 'Admin';
  }

  updateNonEnglishLanguages() {
    this.nonEnglishSupportedLanguages = computed(() => {
      const supportedLanguages =
        this.dashboardStore.supportedLanguages().languages;
      const nonEnglishLanguages = supportedLanguages.filter(
        (lang) => lang.code !== DEFAULT_LANG_CODE
      );
      return nonEnglishLanguages;
    });
  }

  closeSideDrawer() {
    this.openSideDrawer.set(false);
  }

  onNavigationEnd() {
    this.subscriptions.sink = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.setBreadCrumb();
      });
  }

  private setBreadCrumb() {
    this.breadcrumbs.set(
      this.dashboardService.createBreadCrumbs(
        this.activatedRoute,
        this.dashboardStore.supportedLanguages().languages
      )
    );
  }

  onNavigationStart() {
    this.subscriptions.sink = this.router.events
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
