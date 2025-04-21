import { inject, Injectable } from '@angular/core';
import {
  LanguageResourceService,
  ThemeService,
  ThemeType,
} from '@cccsharonparish/angular';
import { TuiBreakpointService } from '@taiga-ui/core';
import { environment } from '../../environments/environment';
import { Language, Settings } from '@cccsharonparish/mydailydigest';
import { AUTH_TOKEN, COLLECTION, REMOTE_DATA_TOKEN } from '../services';
import { ActivatedRoute } from '@angular/router';
import { LANGUAGES_MOCK } from './mock/languages-mock';
import { of } from 'rxjs';
export interface IBreadCrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly breakpoint$ = inject(TuiBreakpointService);
  private readonly themeService = inject(ThemeService);
  private readonly authService = inject(AUTH_TOKEN);
  private readonly BREADCRUMB_ROUTE_DATA_KEY = 'breadcrumb';
  private readonly languageService = inject(LanguageResourceService);
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  private readonly USE_MOCK_DATA = environment.useMockData;
  logout() {
    return this.authService.signOut();
  }

  setTheme(themeType: ThemeType) {
    this.setThemeType(themeType);
    const theme = this.themeService.isAppThemeType(themeType)
      ? themeType
      : this.themeService.getDeviceTheme();
    this.themeService.setAppTheme(theme);
  }

  private setThemeType(themeType: ThemeType) {
    this.themeService.setThemeType(
      Settings.themeKey(environment.domain),
      themeType
    );
  }

  private getLanguageCodeLabel(
    languageCode: string,
    supportedLanguages: Language[]
  ) {
    if (languageCode) {
      const language = supportedLanguages.find(
        (lang) => lang.code === languageCode
      );

      if (language) {
        return language.label;
      }
    }
    return languageCode;
  }

  createBreadCrumbs(
    route: ActivatedRoute,
    supportedLanguages: Language[],
    url = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    //If no routeConfig is available we are on the root path
    let path = route.routeConfig ? route.routeConfig.path : '';

    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data[this.BREADCRUMB_ROUTE_DATA_KEY]
        : '';

    //If label is not empty
    if (label) {
      label = this.languageService.getString(label);
    }

    // If path contains a dynamic route such as ':id', get :id from path
    const dynamicRouteInPath = path?.split('/').pop();
    const isDynamicRoute = dynamicRouteInPath?.startsWith(':');

    if (isDynamicRoute && route.snapshot) {
      //Get id from :id
      const paramName = dynamicRouteInPath?.split(':')[1];
      //Get parameter of :id e.g like 2
      const dynamicRouteParameter = route.snapshot.params[paramName!];
      //Change path from lyrics/:id to lyrics/2
      path = path?.replace(dynamicRouteInPath!, dynamicRouteParameter);
      //Change label from Lyrics to Lyrics/2
      label = `${label} (${this.getLanguageCodeLabel(
        dynamicRouteParameter,
        supportedLanguages
      )})`;
    }

    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    // Add only route with non-empty label to array of breadcrumb
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    const thereAreMoreChildRoutes = !!route.firstChild;
    if (thereAreMoreChildRoutes) {
      return this.createBreadCrumbs(
        route.firstChild,
        supportedLanguages,
        nextUrl,
        newBreadcrumbs
      );
    }
    return newBreadcrumbs;
  }

  getSupportedLanguages() {
    if (this.USE_MOCK_DATA) {
      return of(LANGUAGES_MOCK);
    }
    return this.remoteData.getAListOfDocData<Language>(
      COLLECTION.LANGUAGES,
      []
    );
  }
}
