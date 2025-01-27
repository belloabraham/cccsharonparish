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
  ISpiritualDailyDigest,
  ISpiritualDailyDigestUIState,
  Language,
  REGEX,
} from '@cccsharonparish/mydailydigest';
import {
  HttpRequestProgressIndicatorService,
  STORAGE_PATH,
} from '../../../services';
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
import { of, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ContentService } from '../content.service';
import { environment } from '../../../../environments/environment';

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
    TuiLink,
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
  readonly language = signal<Language | null>(null);
  readonly englishContent = signal<string | null>(null);
  defaultImageUrl = 'https://placehold.co/480x270?text=.';
  readonly uploadedAudioUrl = signal<string | null>(null);
  rootStoragePath = '';

  protected maxImageSizeExceededError: TuiValidationError<
    Record<string, unknown>
  > | null = null;
  protected maxAudioSizeExceededError: TuiValidationError<
    Record<string, unknown>
  > | null = null;
  readonly languageService = inject(LanguageResourceService);
  readonly contentService = inject(ContentService);

  private readonly MAX_ALLOWED_HEADER_IMAGE_SIZE_IN_BYTES = 500 * 1024; //500Kb
  private readonly MAX_ALLOWED_AUDIO_SIZE_IN_BYTES = 10 * 1024 * 1024; //10Mb

  readonly imageUploadState = signal<
    'uploading' | 'uploaded' | 'error' | 'none'
  >('none');
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
  protected readonly audioFileFC = new FormControl<TuiFileLike | null>(null);
  protected readonly failedAudioFile$ = new Subject<TuiFileLike | null>();
  protected readonly loadingAudioFile$ = new Subject<TuiFileLike | null>();
  loadedAudioFile$: Observable<TuiFileLike | null> = of(null);

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly dialogContext: TuiDialogContext<IDialogData, IDialogData>
  ) {}

  ngOnInit(): void {
    this.initForm();
    const data = this.dialogContext.data;
    const existingContent = data.existingContent;
    this.rootStoragePath = data.rootStoragePath;
    this.language.set(data.language);
    if (existingContent) {
      this.updateFormWithExistingData(existingContent);
    }
  }

  updateFormWithExistingData(existingContent: ISpiritualDailyDigest) {
    const contentForLanguage = existingContent.content.find(
      (content) => content.language.code === this.language()?.code
    )!;

    const textContent = contentForLanguage.text;
    const bibleVerse = contentForLanguage.text.bibleVerse;
    const date = new Date(
      existingContent.year,
      existingContent.month - 1,
      existingContent.day
    );

    const uiState: ISpiritualDailyDigestUIState = {
      topic: textContent.topic,
      message: textContent.message,
      reference: bibleVerse.reference,
      verses: bibleVerse.verses,
      keyVerse: bibleVerse.keyVerse,
      tags: existingContent.tags,
      date: date,
      imageUrl: existingContent.imageUrl,
      audioUrl: contentForLanguage.audioUrl,
    };
    this.setDefaultMediaContent();
    this.setFormValue(uiState);
  }

  setDefaultMediaContent(sddUIiState?: ISpiritualDailyDigestUIState) {
    if (sddUIiState?.imageUrl) {
      this.defaultImageUrl = sddUIiState.imageUrl;
    }
    if (sddUIiState?.audioUrl) {
      this.uploadedAudioUrl.set(sddUIiState.audioUrl);
    }
  }

  private setFormValue(sddUIiState: ISpiritualDailyDigestUIState) {
    this.form.setValue({
      ...sddUIiState,
    });
    this.dateFC.disable();
  }

  ngAfterViewInit(): void {
    if (this.language()?.code === 'en') {
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

  private contentHeaderImageFileNameWithExt = '';
  onImageFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.maxImageSizeExceededError = null;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.contentHeaderImageFileNameWithExt = file.name;
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
    if (this.language()?.code !== 'en') {
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
    this.imageUploadState.set('uploading');
    this.contentService
      .uploadDraftContentHeaderImage(
        dataURL,
        this.contentHeaderImageFileNameWithExt
      )
      .subscribe({
        next: (uploadResult) => {
          this.imageUploadState.set('uploaded');
          this.defaultImageUrl = `${environment.cdnBaseUrl}/${uploadResult.metadata.fullPath}`;
        },
        error: () => {
          this.imageUploadState.set('error');
        },
      });
  }

  onSubmit() {
    if (this.form.valid) {
      const sddUIState: ISpiritualDailyDigestUIState = {
        topic: this.topicFC.value!,
        message: this.messageFC.value!,
        reference: this.bibleReferenceFC.value!,
        verses: this.referenceVersesFC.value!,
        keyVerse: this.referenceKeyVersesFC.value!,
        tags: this.tagsFC.value!,
        date: this.dateFC.value!,
        imageUrl: this.defaultImageUrl,
        audioUrl: this.uploadedAudioUrl() || undefined,
      };

      this.contentService.createContent(sddUIState, this.language()!);
    }
  }

  removeAudioFile(): void {
    this.failedAudioFile$.next(null);
    this.loadedAudioFile$ = of(null);
  }

  uploadAudio(event: Event) {
    this.maxAudioSizeExceededError = null;
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files![0];
      if (file.size > this.MAX_ALLOWED_AUDIO_SIZE_IN_BYTES) {
        this.failedAudioFile$.next(file);
        this.showMaximumAudioSizeExceededError();
      } else {
        this.failedAudioFile$.next(null);
        this.loadingAudioFile$.next(file);
        this.loadedAudioFile$ = of(null);

        this.contentService
          .uploadAudio(file, [
            this.rootStoragePath,
            STORAGE_PATH.AUDIO,
            this.language()!.code,
          ])
          .subscribe({
            next: () => {
              this.loadingAudioFile$.next(null);
              this.loadedAudioFile$ = of(file);
            },
            error: () => {
              this.failedAudioFile$.next(file);
              this.loadingAudioFile$.next(null);
              this.loadedAudioFile$ = of(null);
            },
          });
      }
    }
  }

  showMaximumAudioSizeExceededError() {
    this.maxAudioSizeExceededError = new TuiValidationError(
      this.languageService.getStringWithParameter(
        this.KEY.MAX_AUDIO_SIZE_EXCEEDED_MSG,
        {
          value: `${this.MAX_ALLOWED_AUDIO_SIZE_IN_BYTES / (1024 * 1024)}Mb`,
        }
      )
    );
  }
}
