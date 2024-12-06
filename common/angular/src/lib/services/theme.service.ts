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
