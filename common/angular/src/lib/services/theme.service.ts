import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

export type Theme = 'light' | 'dark';

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

  getDeviceTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  getSettingsTheme(key: string) {
    const theme = localStorage.getItem(key);
    if (theme) {
      return theme as Theme;
    }
    return null;
  }

  setSettingsTheme(key: string, theme: Theme) {
    return localStorage.setItem(key, theme);
  }

  onDeviceThemeChanged(): Observable<Theme> {
    return new Observable((observer) => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => {
          observer.next(event.matches ? 'dark' : 'light');
        });
    });
  }
}
