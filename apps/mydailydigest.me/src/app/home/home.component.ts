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
  readonly APP_NAME = environment.appName;
  readonly ROUTE = ROUTE;
  readonly cdnBaseUrl = environment.cdnBaseUrl;
  readonly slideDurationSeconds = 4;
  readonly imageUrls = [
    `${this.cdnBaseUrl}/images/features/splash-screen.png`,
    `${this.cdnBaseUrl}/images/features/introduction.png`,
    `${this.cdnBaseUrl}/images/features/audio.png`,
    `${this.cdnBaseUrl}/images/features/bookmarks.png`,
    `${this.cdnBaseUrl}/images/features/notification.png`,
    `${this.cdnBaseUrl}/images/features/multilingual.png`,
  ];
  readonly slideshowDurationSeconds =
    this.imageUrls.length * this.slideDurationSeconds;
}
