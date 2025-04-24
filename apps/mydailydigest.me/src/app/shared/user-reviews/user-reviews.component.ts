import { Component } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { APP_REVIEWS } from '../data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-reviews',
  imports: [NgOptimizedImage, NgFor, MatIconModule],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.scss',
})
export class UserReviewsComponent {
  appReviews = APP_REVIEWS;
}
