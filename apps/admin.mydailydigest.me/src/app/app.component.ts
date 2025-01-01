import { TuiRoot } from '@taiga-ui/core';
import { Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@cccsharonparish/angular';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import {
  BaseAppComponent,
  ROUTE,
  Settings,
} from '@cccsharonparish/mydailydigest';
import { ConnectionStateUtil } from '@cccsharonparish/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { APP_STRING_RESOURCE_KEY } from './i18n/app-string-res-keys';
import { environment } from '../environments/environment';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpRequestProgressIndicatorService } from './services';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, TranslocoModule, TuiRoot, MatProgressBarModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ConnectionStateUtil],
})
export class AppComponent
  extends BaseAppComponent
  implements OnDestroy, OnInit
{
  private readonly themeService = inject(ThemeService);
  themeChangeSubscription = Subscription.EMPTY;
  private connectionStateUtil = inject(ConnectionStateUtil);
  private httpRequestLoadingIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );

  deviceConnected: Signal<boolean | undefined>;
  isLoading = this.httpRequestLoadingIndicatorService.isLoading;

  KEY = APP_STRING_RESOURCE_KEY;
  isDarkMode = this.themeService.isDarkMode;
  APP_NAME = environment.appName;

  constructor() {
    super();
    this.setAppTheme();
    this.onDeviceThemeChanged();
    this.deviceConnected = toSignal(
      this.connectionStateUtil.observeDeviceInternetConnectionState(ROUTE.ROOT)
    );
  }

  setAppTheme() {
    const themeType = this.themeService.getThemeType(
      Settings.themeKey(environment.domain)
    );

    const theme = this.themeService.isAppTheme(themeType)
      ? themeType
      : this.themeService.getDeviceTheme();
    this.themeService.setTheme(theme);
  }

  onDeviceThemeChanged() {
    this.themeChangeSubscription = this.themeService
      .onDeviceThemeChanged()
      .subscribe({
        next: () => {
          const themeType = this.themeService.getThemeType(
            Settings.themeKey(environment.domain)
          );
          if (!this.themeService.isAppTheme(themeType)) {
            this.themeService.setTheme(this.themeService.getDeviceTheme());
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe();
  }
}
