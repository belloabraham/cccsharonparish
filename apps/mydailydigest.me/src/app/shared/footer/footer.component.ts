import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CONSTANT, environment, ROUTE } from '@cccsharonparish/mydailydigest';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();
  CONSTANT = CONSTANT;
  ROUTE = ROUTE;
  APP_NAME = environment.appName;
  EMAIL = CONSTANT.CONTACT.EMAIL;
}
