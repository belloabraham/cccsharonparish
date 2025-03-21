import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { ThemeService } from '@cccsharonparish/angular';
import { Settings } from './data';

@Component({
  template: ``,
})
export class BaseAppComponent implements OnInit, OnDestroy {
  readonly showPreloader = signal(true);
  readonly router = inject(Router);
  subscriptions = new SubSink();
  readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showPreloader.set(false);
      }
    });
  }

  setAppTheme(domain: string) {
    const themeType = this.themeService.getThemeType(Settings.themeKey(domain));

    const theme = this.themeService.isAppThemeType(themeType)
      ? themeType
      : this.themeService.getDeviceTheme();
    this.themeService.setAppTheme(theme);
  }

  onDeviceThemeChanged(domain: string) {
    this.subscriptions.sink = this.themeService
      .onDeviceThemeChanged()
      .subscribe({
        next: () => {
          const themeType = this.themeService.getThemeType(
            Settings.themeKey(domain)
          );
          if (!this.themeService.isAppThemeType(themeType)) {
            this.themeService.setAppTheme(this.themeService.getDeviceTheme());
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
