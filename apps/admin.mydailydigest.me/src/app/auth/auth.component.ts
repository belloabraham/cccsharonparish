import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { REGEX } from '@cccsharonparish/mydailydigest';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-auth',
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  KEY = STRING_RESOURCE_KEY;
  emailFC = new FormControl<string | null>(null, [
    Validators.required,
    Validators.pattern(REGEX.EMAIL),
  ]);
}
