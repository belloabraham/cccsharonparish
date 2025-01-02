import { inject, Injectable } from '@angular/core';
import { ThemeService, ThemeType } from '@cccsharonparish/angular';
import { TuiBreakpointService } from '@taiga-ui/core';
import { environment } from '../../environments/environment';
import { Settings } from '@cccsharonparish/mydailydigest';
import { AUTH_TOKEN, AuthService } from '../services';

@Injectable()
export class DashboardService {
  readonly breakpoint$ = inject(TuiBreakpointService);
  private readonly themeService = inject(ThemeService);
  private readonly authService = inject(AUTH_TOKEN);

  logout() {
    return this.authService.signOut();
  }

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
