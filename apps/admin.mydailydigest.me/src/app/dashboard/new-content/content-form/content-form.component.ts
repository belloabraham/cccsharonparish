import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
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
import { TuiDialogContext, TuiLink, TuiNotification } from '@taiga-ui/core';
import { ContentForm } from './content-form';
import {
  CustomValidators,
  LanguageResourceService,
} from '@cccsharonparish/angular';
import {
  ISpiritualDailyDigestUIState,
  REGEX,
} from '@cccsharonparish/mydailydigest';
import { HttpRequestProgressIndicatorService } from '../../../services';
import { TextFieldModule } from '@angular/cdk/text-field';
import Cropper from 'cropperjs';
import { TuiError } from '@taiga-ui/core';
import { TuiValidationError } from '@taiga-ui/cdk';
import { NgIf } from '@angular/common';
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltip } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { IDialogData } from '../new-content.component';

import type { TuiFileLike } from '@taiga-ui/kit';
import { TuiFiles } from '@taiga-ui/kit';
import type { Observable } from 'rxjs';
import { finalize, map, of, Subject, switchMap, timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

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
    TextFieldModule,
    TuiError,
    NgIf,
    MatProgressBarModule,
    MatExpansionModule,
    MatTooltip,
    ClipboardModule,
    AsyncPipe,
    NgIf,
    ReactiveFormsModule,
    TuiFiles,
    TuiLink
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.scss',
})
export class ContentFormComponent implements OnInit, AfterViewInit {
  KEY = CONTENT_STRING_RESOURCE_KEYS;
  form!: FormGroup<ContentForm>;
  httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );
  isLoading = this.httpRequestProgressIndicatorService.isLoading;
  coverImage = viewChild.required<ElementRef<HTMLImageElement>>('cover');
  cropper!: Cropper;
  readonly imageAttached = signal(false);
  readonly languageCode = signal('');
  readonly englishContent = signal<string | null>(null);
  defaultImageUrl = 'https://placehold.co/480x270?text=.';
  readonly uploadedAudioUrl = signal<string | null>(
    'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3'
  );

  protected maxImageSizeExceededError: TuiValidationError<
    Record<string, unknown>
  > | null = null;
  readonly languageService = inject(LanguageResourceService);
  private readonly MAX_ALLOWED_HEADER_IMAGE_SIZE_IN_BYTES = 500 * 1024; //500Kb
  readonly imageUploadState = signal<
    'uploading' | 'uploaded' | 'error' | 'none'
  >('none');
  readonly imageUploadProgress = signal(0);
  readonly cropperState = signal<'touched' | 'pristine'>('pristine');
  readonly tags = signal<string[]>([]);

  readonly topicFC = this.getNewStringFC();
  readonly bibleReferenceFC = this.getNewStringFC([
    Validators.pattern(REGEX.BIBLE_REFERENCE),
  ]);
  readonly referenceVersesFC = this.getNewStringFC();
  readonly referenceKeyVersesFC = this.getNewStringFC();
  readonly messageFC = this.getNewStringFC();
  readonly tagsFC = new FormControl<string[] | null>([]);
  readonly dateFC = new FormControl<Date | null>(null, {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly dialogContext: TuiDialogContext<IDialogData, IDialogData>
  ) {}

  ngOnInit(): void {
    this.initForm();
    const data = this.dialogContext.data;
    const content = data.content;
    this.languageCode.set(data.langCode);
    this.setDefaultMediaContent();
    this.setFormValue(content);
  }

  setDefaultMediaContent(sddUIiState?: ISpiritualDailyDigestUIState) {
    if (sddUIiState?.imageUrl) {
      this.defaultImageUrl = sddUIiState.imageUrl;
    }
  }

  private setFormValue(sddUIiState?: ISpiritualDailyDigestUIState) {
    if (sddUIiState) {
      this.form.setValue({
        ...sddUIiState,
      });
      this.dateFC.disable();
    }
  }

  ngAfterViewInit(): void {
    if (this.languageCode() === 'en') {
      this.initCropper();
      setTimeout(() => {
        this.cropper.disable();
      }, 500);
    }
  }

  attachImage(input: HTMLInputElement) {
    if (!this.imageAttached()) {
      input.click();
    }
  }

  private getNewStringFC(validators: ValidatorFn[] = []) {
    return new FormControl<string | null>(null, {
      validators: [CustomValidators.requiredString(), ...validators],
      updateOn: 'blur',
    });
  }

  private initForm() {
    this.form = new FormGroup({
      topic: this.topicFC,
      message: this.messageFC,
      reference: this.bibleReferenceFC,
      verses: this.referenceVersesFC,
      keyVerse: this.referenceKeyVersesFC,
      tags: this.tagsFC,
      date: this.dateFC,
    });
  }

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

  initCropper() {
    const image = this.coverImage().nativeElement;
    const cropperState = this.cropperState;
    const imageAttached = this.imageAttached;

    const cropper = new Cropper(image, {
      aspectRatio: 4 / 3,
      dragMode: 'move',
      ready() {
        if (!imageAttached()) {
          cropper.clear();
        }
      },
      cropmove(event) {
        cropperState.set('touched');
      },
      zoom(event) {
        cropperState.set('touched');
      },
    });
    this.cropper = cropper;
  }

  resetCropper() {
    this.cropper.reset();
    this.cropperState.set('pristine');
  }

  onImageFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.maxImageSizeExceededError = null;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.size > this.MAX_ALLOWED_HEADER_IMAGE_SIZE_IN_BYTES) {
        this.showMaximumSizeExceededError();
      } else {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const dataUrl = e.target?.result as string;
          this.cropper.enable();
          this.imageAttached.set(true);
          this.cropper.replace(dataUrl);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  showMaximumSizeExceededError() {
    this.maxImageSizeExceededError = new TuiValidationError(
      this.languageService.getStringWithParameter(
        this.KEY.MAX_IMAGE_SIZE_EXCEEDED_MSG,
        {
          value: `${this.MAX_ALLOWED_HEADER_IMAGE_SIZE_IN_BYTES / 1024}kb`,
        }
      )
    );
  }

  getEnglishContentForTranslation() {
    if (this.languageCode() !== 'en') {
    }
  }

  closeDialog() {
    this.dialogContext.$implicit.complete();
  }

  uploadImage() {
    const dataURL = this.cropper.getCroppedCanvas().toDataURL('image/png');
    this.cropper.replace(dataURL);
    this.cropper.clear();
    this.cropperState.set('pristine');
    this.imageAttached.set(false);
    setTimeout(() => {
      this.cropper.disable();
    }, 500);
  }

  onSubmit() {
    this.cropper.getCroppedCanvas();
    if (this.form.valid) {
    }
  }

  protected readonly control = new FormControl<TuiFileLike | null>(
    null,
    Validators.required
  );

  protected readonly failedFiles$ = new Subject<TuiFileLike | null>();
  protected readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  protected readonly loadedFiles$ = this.control.valueChanges.pipe(
    switchMap((file) => this.processFile(file))
  );

  protected removeFile(): void {
    this.control.setValue(null);
  }

  protected processFile(
    file: TuiFileLike | null
  ): Observable<TuiFileLike | null> {
    this.failedFiles$.next(null);

    if (this.control.invalid || !file) {
      return of(null);
    }

    this.loadingFiles$.next(file);

    return timer(1000).pipe(
      map(() => {
        if (Math.random() > 0.5) {
          return file;
        }

        this.failedFiles$.next(file);

        return null;
      }),
      finalize(() => this.loadingFiles$.next(null))
    );
  }
}
