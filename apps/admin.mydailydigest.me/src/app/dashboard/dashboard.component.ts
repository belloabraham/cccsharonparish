import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, TuiNavigation],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
