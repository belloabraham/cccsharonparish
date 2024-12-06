import { Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@cccsharonparish/angular';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseAppComponent, ROUTE } from '@cccsharonparish/mydailydigest';
import { ConnectionStateUtil } from '@cccsharonparish/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { APP_STRING_RESOURCE_KEY } from './i18n/app-string-res-keys';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, TranslocoModule],
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

  constructor() {
    super();
    this.loadAppTheme();
    this.deviceConnected = toSignal(
      this.connectionStateUtil.observeDeviceInternetConnectionState(ROUTE.ROOT)
    );
  }

  loadAppTheme() {
    const theme = this.themeService.getDeviceTheme();
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
