import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { Observable } from 'rxjs';

export type Theme = 'light' | 'dark';
export type ThemeType = Theme | 'device';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(false);
  platformId = inject(PLATFORM_ID);

  /**
   * Sets the application theme.
   * @param theme - The theme to set ('light' or 'dark').
   */
  setAppTheme(theme: Theme) {
    if (isPlatformBrowser(this.platformId)) {
      const isDarkMode = theme === 'light' ? false : true;
      document.documentElement.setAttribute('data-theme', theme);
      this.isDarkMode.set(isDarkMode);
    }
  }

  isAppThemeType(themeType: ThemeType | null) {
    return themeType === 'light' || themeType === 'dark';
  }

  /**
   * Retrieves the saved theme type from local storage.
   * @param key - The local storage key to retrieve the theme from.
   * @returns The stored theme type or null if not found.
   */
  getDeviceTheme(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      return theme;
    }
    return 'light';
  }

  /**
   * Stores the selected theme type in local storage.
   * @param key - The local storage key.
   * @param theme - The theme type to store.
   */
  getThemeType(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem(key);
      if (theme) {
        return theme as ThemeType;
      }
    }
    return null;
  }

  setThemeType(key: string, theme: ThemeType) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, theme);
    }
  }

  onDeviceThemeChanged(): Observable<void> {
    return new Observable((observer) => {
      if (isPlatformBrowser(this.platformId)) {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (event) => {
            observer.next();
          });
      }
    });
  }
}
