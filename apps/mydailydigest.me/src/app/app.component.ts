import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseAppComponent } from '@cccsharonparish/mydailydigest';
import { MatIconRegistry } from '@angular/material/icon';
import { environment } from '../environments/environment';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, TranslocoModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent
  extends BaseAppComponent
  implements OnDestroy, OnInit
{
  private readonly matIconRegistry = inject(MatIconRegistry);

  constructor() {
    super();
    this.matIconRegistry.setDefaultFontSetClass('mdd-icons');
    const domain = environment.domain;
    this.setAppTheme(domain);
    this.onDeviceThemeChanged(domain);
  }
}
