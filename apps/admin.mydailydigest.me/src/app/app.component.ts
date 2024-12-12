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

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, TranslocoModule, TuiRoot],
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
  deviceConnected: Signal<boolean | undefined>;
  KEY = APP_STRING_RESOURCE_KEY;
  isDarkMode = this.themeService.isDarkMode;
  APP_NAME = environment.appName

  constructor() {
    super();
    this.loadAppTheme();
    this.deviceConnected = toSignal(
      this.connectionStateUtil.observeDeviceInternetConnectionState(ROUTE.ROOT)
    );
  }

  loadAppTheme() {
    const settingsTheme = this.themeService.getSettingsTheme(
      Settings.themeKey(environment.domain)
    );
    const theme =
      settingsTheme === 'light' || settingsTheme === 'dark'
        ? settingsTheme
        : this.themeService.getDeviceTheme();
    this.themeService.setTheme(theme);

    this.themeChangeSubscription = this.themeService
      .onDeviceThemeChanged()
      .subscribe({
        next: (theme) => {
          this.themeService.setTheme(theme);
        },
      });
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe();
  }
}
