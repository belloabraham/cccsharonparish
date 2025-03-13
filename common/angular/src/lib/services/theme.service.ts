import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

export type Theme = 'light' | 'dark';
export type ThemeType = Theme | 'device';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(false);

  /**
   * Sets the application theme.
   * @param theme - The theme to set ('light' or 'dark').
   */
  setAppTheme(theme: Theme) {
    const isDarkMode = theme === 'light' ? false : true;
    document.documentElement.setAttribute('data-theme', theme);
    this.isDarkMode.set(isDarkMode);
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
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  /**
   * Stores the selected theme type in local storage.
   * @param key - The local storage key.
   * @param theme - The theme type to store.
   */
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
