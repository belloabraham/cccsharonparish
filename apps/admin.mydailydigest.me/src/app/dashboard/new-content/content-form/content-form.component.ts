import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-form',
  imports: [ReactiveFormsModule, MatButtonModule],
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.scss'
})
export class ContentFormComponent {

}
