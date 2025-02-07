import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseAppComponent, Settings } from '@cccsharonparish/mydailydigest';
import { ThemeService } from '@cccsharonparish/angular';
import { Subscription } from 'rxjs';
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
  constructor() {
    super();
    const domain = environment.domain
    this.setAppTheme(domain);
    this.onDeviceThemeChanged(domain);
  }
}
