import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { SubSink } from 'subsink';
import { ThemeService } from '@cccsharonparish/angular';
import { Settings } from './data';

@Component({
  template: ``,
})
export class BaseAppComponent implements OnInit, OnDestroy {
  readonly showPreloader = signal(true);
   readonly router = inject(Router);
  private readonly matIconRegistry = inject(MatIconRegistry);
  subscriptions = new SubSink();
  readonly themeService = inject(ThemeService);

  constructor() {
    this.matIconRegistry.setDefaultFontSetClass('sdd-icons');
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showPreloader.set(false);
      }
    });
  }

  setAppTheme(domain: string) {
    const themeType = this.themeService.getThemeType(Settings.themeKey(domain));

    const theme = this.themeService.isAppTheme(themeType)
      ? themeType
      : this.themeService.getDeviceTheme();
    this.themeService.setTheme(theme);
  }

  onDeviceThemeChanged(domain: string) {
    this.subscriptions.sink = this.themeService
      .onDeviceThemeChanged()
      .subscribe({
        next: () => {
          const themeType = this.themeService.getThemeType(
            Settings.themeKey(domain)
          );
          if (!this.themeService.isAppTheme(themeType)) {
            this.themeService.setTheme(this.themeService.getDeviceTheme());
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
