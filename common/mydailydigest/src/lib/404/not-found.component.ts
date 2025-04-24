import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ROUTE } from '../data';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mdd-not-found',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, MatButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class MDDNotFoundComponent {
  ROOT = ROUTE.ROOT;
  private readonly title = inject(Title);

  constructor() {
    this.title.setTitle('Error 404 - Page Not Found');
  }
}
