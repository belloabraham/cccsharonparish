import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { environment, ROUTE } from '@cccsharonparish/mydailydigest';
import { UserReviewsComponent } from '../shared/user-reviews/user-reviews.component';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SharedModule, UserReviewsComponent, NgOptimizedImage, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  APP_NAME = environment.appName;
  ROUTE = ROUTE;
  cdnBaseUrl = environment.cdnBaseUrl;
  imageUrls = [
    `${this.cdnBaseUrl}/images/features/splash-screen.png`,
    `${this.cdnBaseUrl}/images/features/introduction.png`,
    `${this.cdnBaseUrl}/images/features/audio.png`,
    `${this.cdnBaseUrl}/images/features/notification.png`,
    `${this.cdnBaseUrl}/images/features/multilingual.png`,
    `${this.cdnBaseUrl}/images/features/bookmarks.png`,
  ];
}
