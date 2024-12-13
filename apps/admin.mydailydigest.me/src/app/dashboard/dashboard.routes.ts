import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ROUTE } from '@cccsharonparish/mydailydigest';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: ROUTE.ROOT,
    component: DashboardComponent,
    children: [],
  },
];
