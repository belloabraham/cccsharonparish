import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseAppComponent } from '@cccsharonparish/mydailydigest';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, TranslocoModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BaseAppComponent {}
