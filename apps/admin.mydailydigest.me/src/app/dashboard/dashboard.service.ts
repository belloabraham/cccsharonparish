import { inject, Injectable } from '@angular/core';
import { ThemeService } from '@cccsharonparish/angular';
import { TuiBreakpointService } from '@taiga-ui/core';
import { environment } from '../../environments/environment';
import { Settings } from '@cccsharonparish/mydailydigest';

@Injectable()
export class DashboardService {
  readonly breakpoint$ = inject(TuiBreakpointService);
  private readonly themeService = inject(ThemeService);

  toggleTheme() {
    const theme = this.themeService.isDarkMode() ? 'light' : 'dark';
    this.themeService.setTheme(theme);
    this.themeService.setSettingsTheme(
      Settings.themeKey(environment.domain),
      theme
    );
  }
}
