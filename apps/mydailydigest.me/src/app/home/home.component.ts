import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  viewChild,
  viewChildren,
} from '@angular/core';
import { SharedModule } from '../shared';
import { environment, ROUTE } from '@cccsharonparish/mydailydigest';
import { UserReviewsComponent } from '../shared/user-reviews/user-reviews.component';
import { isPlatformBrowser, NgFor, NgOptimizedImage } from '@angular/common';
import type { AnimationOptions, AnimationPlaybackControlsWithThen } from 'motion';

const SLIDE_DURATION_SECONDS = 0.4;
const SLIDE_DELAY_MS = 5000;
const TITLE_REVEAL_DURATION_SECONDS = 0.8;
const TITLE_REVEAL_STAGGER_SECONDS = 0.08;
const DESCRIPTION_REVEAL_DURATION_SECONDS = 0.7;
const SLIDE_EASE: NonNullable<AnimationOptions['ease']> = [0.16, 1, 0.3, 1];
type MotionAnimate = (typeof import('motion'))['animate'];

@Component({
  selector: 'app-home',
  imports: [SharedModule, UserReviewsComponent, NgOptimizedImage, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly APP_NAME = environment.appName;
  readonly ROUTE = ROUTE;
  readonly cdnBaseUrl = environment.cdnBaseUrl;
  readonly titleWords = this.APP_NAME.split(' ');
  readonly descriptionElement =
    viewChild<ElementRef<HTMLParagraphElement>>('description');
  readonly titleWordElements =
    viewChildren<ElementRef<HTMLSpanElement>>('titleWord');
  readonly slideImages = viewChildren<ElementRef<HTMLImageElement>>('slideImage');
  readonly imageUrls = [
    `/images/features/introduction.png`,
    `/images/features/audio.png`,
    `/images/features/bookmarks.png`,
    `/images/features/notification.png`,
    `/images/features/multilingual.png`,
  ];
  private readonly platformId = inject(PLATFORM_ID);
  private isAnimationActive = false;
  private activeAnimations = new Set<AnimationPlaybackControlsWithThen>();
  private pendingWaitTimeoutId: number | null = null;
  private pendingWaitResolver: (() => void) | null = null;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isAnimationActive = true;
    void this.initializeAnimations().catch(() => {
      this.isAnimationActive = false;
    });
  }

  ngOnDestroy(): void {
    this.isAnimationActive = false;
    this.stopActiveAnimations();
    this.resolvePendingWait();
  }

  private async initializeAnimations(): Promise<void> {
    const { animate } = await import('motion');
    if (!this.isAnimationActive) {
      return;
    }

    const titleWords = this.titleWordElements().map((word) => word.nativeElement);
    if (titleWords.length) {
      void this.revealTitle(titleWords, animate);
    }

    const description = this.descriptionElement()?.nativeElement;
    if (description) {
      void this.revealDescription(description, titleWords.length, animate);
    }

    const slides = this.slideImages().map((slide) => slide.nativeElement);
    if (!slides.length) {
      return;
    }

    void this.startSlideshow(slides, animate).catch(() => {
      this.isAnimationActive = false;
    });
  }

  private async revealTitle(
    titleWords: HTMLSpanElement[],
    animate: MotionAnimate
  ): Promise<void> {
    await this.runAnimations(
      titleWords.map((word, index) =>
        animate(
          word,
          { y: ['110%', '0%'], opacity: [0, 1] },
          {
            duration: TITLE_REVEAL_DURATION_SECONDS,
            delay: index * TITLE_REVEAL_STAGGER_SECONDS,
            ease: SLIDE_EASE,
          }
        )
      )
    );
  }

  private async revealDescription(
    description: HTMLParagraphElement,
    titleWordCount: number,
    animate: MotionAnimate
  ): Promise<void> {
    const descriptionDelay = Math.min(
      0.26,
      Math.max(
        TITLE_REVEAL_STAGGER_SECONDS,
        (titleWordCount - 1) * TITLE_REVEAL_STAGGER_SECONDS * 0.6 + 0.08
      )
    );

    await this.runAnimations([
      animate(
        description,
        { y: [24, 0], opacity: [0, 1] },
        {
          duration: DESCRIPTION_REVEAL_DURATION_SECONDS,
          delay: descriptionDelay,
          ease: SLIDE_EASE,
        }
      ),
    ]);
  }

  private async startSlideshow(
    slides: HTMLImageElement[],
    animate: MotionAnimate
  ): Promise<void> {
    if (!this.isAnimationActive) {
      return;
    }

    this.resetSlides(slides);

    await this.runAnimations([
      animate(slides[0], { opacity: [0, 1] }, { duration: SLIDE_DURATION_SECONDS }),
    ]);
    if (!this.isAnimationActive || slides.length === 1) {
      return;
    }

    let currentIndex = 0;

    while (this.isAnimationActive) {
      await this.wait(SLIDE_DELAY_MS);
      if (!this.isAnimationActive) {
        return;
      }

      const nextIndex = (currentIndex + 1) % slides.length;
      const currentSlide = slides[currentIndex];
      const nextSlide = slides[nextIndex];

      this.setSlideState(nextSlide, '100%', '1');

      await this.runAnimations([
        animate(
          currentSlide,
          { x: ['0%', '-100%'] },
          { duration: SLIDE_DURATION_SECONDS, ease: SLIDE_EASE }
        ),
        animate(
          nextSlide,
          { x: ['100%', '0%'] },
          { duration: SLIDE_DURATION_SECONDS, ease: SLIDE_EASE }
        ),
      ]);
      if (!this.isAnimationActive) {
        return;
      }

      this.setSlideState(currentSlide, '100%', '0');
      this.setSlideState(nextSlide, '0%', '1');
      currentIndex = nextIndex;
    }
  }

  private resetSlides(slides: HTMLImageElement[]): void {
    slides.forEach((slide, index) => {
      this.setSlideState(slide, index === 0 ? '0%' : '100%', '0');
    });
  }

  private setSlideState(
    slide: HTMLImageElement,
    xPosition: `${number}%`,
    opacity: '0' | '1'
  ): void {
    slide.style.transform = `translateX(${xPosition})`;
    slide.style.opacity = opacity;
  }

  private async runAnimations(
    animations: AnimationPlaybackControlsWithThen[]
  ): Promise<void> {
    animations.forEach((animation) => this.activeAnimations.add(animation));
    await Promise.allSettled(animations.map((animation) => animation.finished));
    animations.forEach((animation) => {
      this.activeAnimations.delete(animation);
    });
  }

  private stopActiveAnimations(): void {
    this.activeAnimations.forEach((animation) => animation.cancel());
    this.activeAnimations.clear();
  }

  private wait(durationMs: number): Promise<void> {
    return new Promise((resolve) => {
      this.pendingWaitResolver = () => {
        this.pendingWaitTimeoutId = null;
        this.pendingWaitResolver = null;
        resolve();
      };

      this.pendingWaitTimeoutId = window.setTimeout(() => {
        this.pendingWaitResolver?.();
      }, durationMs);
    });
  }

  private resolvePendingWait(): void {
    if (this.pendingWaitTimeoutId !== null) {
      window.clearTimeout(this.pendingWaitTimeoutId);
    }

    this.pendingWaitResolver?.();
  }
}
