import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

export type Theme = 'light' | 'dark';
export type ThemeType = Theme | 'device';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(false);

  setTheme(theme: Theme) {
    const isDarkMode = theme === 'light' ? false : true;
    document.documentElement.setAttribute('data-theme', theme);
    this.isDarkMode.set(isDarkMode);
  }

  isAppTheme(themeType: ThemeType | null) {
    return themeType === 'light' || themeType === 'dark';
  }

  getDeviceTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  getThemeType(key: string) {
    const theme = localStorage.getItem(key);
    if (theme) {
      return theme as ThemeType;
    }
    return null;
  }

  setThemeType(key: string, theme: ThemeType) {
    return localStorage.setItem(key, theme);
  }

  onDeviceThemeChanged(): Observable<void> {
    return new Observable((observer) => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => {
          observer.next();
        });
    });
  }
}
