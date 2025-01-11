import { Component } from '@angular/core';
import { SharedModule, UserDataComponent } from '../../shared';

@Component({
  selector: 'app-profile',
  imports: [SharedModule, UserDataComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
