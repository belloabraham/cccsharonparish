import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SharedModule } from '../../../shared';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CONTENT_STRING_RESOURCE_KEYS } from '../i18n/string-res-keys';
import { TuiNotification } from '@taiga-ui/core';
import { ContentForm } from './form';
import { CustomValidators } from '@cccsharonparish/angular';
import { REGEX } from '@cccsharonparish/mydailydigest';
import { HttpRequestProgressIndicatorService } from '../../../services';

@Component({
  selector: 'app-content-form',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    SharedModule,
    MatChipsModule,
    MatIconModule,
    TuiNotification,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.scss',
})
export class ContentFormComponent implements OnInit {
  KEY = CONTENT_STRING_RESOURCE_KEYS;
  form!: FormGroup<ContentForm>;
  httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );
  isLoading = this.httpRequestProgressIndicatorService.isLoading;

  readonly topicC = this.getNewStringFC();

  readonly bibleReferenceFC = this.getNewStringFC([
    Validators.pattern(REGEX.BIBLE_REFERENCE),
  ]);
  readonly referenceVersesFC = this.getNewStringFC();
  readonly referenceKeyVersesFC = this.getNewStringFC();
  readonly messageFC = this.getNewStringFC();
  readonly tagsFC = new FormControl<string[] | null>([]);

  ngOnInit(): void {
    this.initForm();
  }

  private getNewStringFC(validators: ValidatorFn[] = []) {
    return new FormControl<string | null>(null, {
      validators: [CustomValidators.requiredString(), ...validators],
      updateOn: 'blur',
    });
  }

  private initForm() {
    this.form = new FormGroup({
      topic: this.topicC,
      message: this.messageFC,
      reference: this.bibleReferenceFC,
      verses: this.referenceVersesFC,
      keyVerse: this.referenceKeyVersesFC,
      tags: this.tagsFC,
    });
  }

  readonly tags = signal<string[]>([]);

  removeATag(keyword: string) {
    this.tags.update((keywords) => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }
      keywords.splice(index, 1);
      return [...keywords];
    });
  }

  addATag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.update((keywords) => [...keywords, value]);
    }
    event.chipInput!.clear();
  }

  onSubmit(){
    
  }
}
