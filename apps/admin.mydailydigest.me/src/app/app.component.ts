import { TuiRoot } from '@taiga-ui/core';
import { Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import {
  BaseAppComponent,
  ROUTE,
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
    const domain = environment.domain;
    this.setAppTheme(domain);
    this.onDeviceThemeChanged(domain);
    this.deviceConnected = toSignal(
      this.connectionStateUtil.observeDeviceInternetConnectionState(ROUTE.ROOT)
    );
  }
}
