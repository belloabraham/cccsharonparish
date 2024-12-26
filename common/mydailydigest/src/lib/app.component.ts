import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  template: ``,
})
export class BaseAppComponent implements OnInit {
  readonly showPreloader = signal(true);
  private readonly router = inject(Router);
  private readonly matIconRegistry = inject(MatIconRegistry);

  constructor() {
    this.matIconRegistry.setDefaultFontSetClass('sdd-icons');
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showPreloader.set(false);
      }
    });
  }

}
