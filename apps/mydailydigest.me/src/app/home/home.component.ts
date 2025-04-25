import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { environment, ROUTE } from '@cccsharonparish/mydailydigest';
import { UserReviewsComponent } from "../shared/user-reviews/user-reviews.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SharedModule, UserReviewsComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  APP_NAME = environment.appName;
  ROUTE = ROUTE;
}
