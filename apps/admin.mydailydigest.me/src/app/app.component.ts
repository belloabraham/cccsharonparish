import { TUI_SCROLLBAR_OPTIONS, TuiRoot } from '@taiga-ui/core';
import { Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouterModule,
} from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseAppComponent, ROUTE } from '@cccsharonparish/mydailydigest';
import { ConnectionStateUtil } from '@cccsharonparish/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { APP_STRING_RESOURCE_KEY } from './i18n/app-string-res-keys';
import { environment } from '../environments/environment';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpRequestProgressIndicatorService } from './services';
import { filter, map, merge } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, TranslocoModule, TuiRoot, MatProgressBarModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    ConnectionStateUtil,
    {
      provide: TUI_SCROLLBAR_OPTIONS,
      useValue: {
        mode: 'native',
      },
    },
  ],
})
export class AppComponent
  extends BaseAppComponent
  implements OnDestroy, OnInit
{
  private connectionStateUtil = inject(ConnectionStateUtil);
  private httpRequestLoadingIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );

  deviceIsConnected: Signal<boolean | undefined>;
  isLoading = this.httpRequestLoadingIndicatorService.isLoading;

  KEY = APP_STRING_RESOURCE_KEY;
  isDarkMode = this.themeService.isDarkMode;
  APP_NAME = environment.appName;
  routerIsNavigating!: Signal<boolean>;

  constructor() {
    super();
    const domain = environment.domain;
    this.setAppTheme(domain);
    this.onDeviceThemeChanged(domain);
    this.deviceIsConnected = toSignal(
      this.connectionStateUtil.observeDeviceInternetConnectionState(ROUTE.ROOT)
    );
    this.setNavigationObserver();
  }

  setNavigationObserver() {
    const routerNavigationStartEvent$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationStart),
      map(() => true)
    );
    const routerNavigationStoppedEvent$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map(() => false)
    );

    this.routerIsNavigating = toSignal(
      merge(routerNavigationStoppedEvent$, routerNavigationStartEvent$),
      {
        initialValue: false,
      }
    );
  }
}
