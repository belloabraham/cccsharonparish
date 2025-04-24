import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { environment } from '@cccsharonparish/mydailydigest';
import { UserReviewsComponent } from "../shared/user-reviews/user-reviews.component";

@Component({
  selector: 'app-home',
  imports: [SharedModule, UserReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  APP_NAME = environment.appName;
}
