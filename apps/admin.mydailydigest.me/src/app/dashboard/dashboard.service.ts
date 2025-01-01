import { inject, Injectable } from '@angular/core';
import { ThemeService, ThemeType } from '@cccsharonparish/angular';
import { TuiBreakpointService } from '@taiga-ui/core';
import { environment } from '../../environments/environment';
import { Settings } from '@cccsharonparish/mydailydigest';

@Injectable()
export class DashboardService {
  readonly breakpoint$ = inject(TuiBreakpointService);
  private readonly themeService = inject(ThemeService);

  setTheme(themeType: ThemeType) {
    this.setThemeType(themeType);
    const theme = this.themeService.isAppTheme(themeType)
      ? themeType
      : this.themeService.getDeviceTheme();
    this.themeService.setTheme(theme);
  }

  private setThemeType(themeType: ThemeType) {
    this.themeService.setThemeType(
      Settings.themeKey(environment.domain),
      themeType
    );
  }
}
