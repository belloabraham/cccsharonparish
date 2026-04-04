import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  viewChildren,
} from '@angular/core';
import { SharedModule } from '../shared';
import { environment, ROUTE } from '@cccsharonparish/mydailydigest';
import { UserReviewsComponent } from '../shared/user-reviews/user-reviews.component';
import { isPlatformBrowser, NgFor, NgOptimizedImage } from '@angular/common';
import type { AnimationOptions, AnimationPlaybackControlsWithThen } from 'motion';

const SLIDE_DURATION_SECONDS = 0.4;
const SLIDE_DELAY_MS = 2000;
const SLIDE_EASE: NonNullable<AnimationOptions['ease']> = [0.16, 1, 0.3, 1];

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
  readonly slideImages = viewChildren<ElementRef<HTMLImageElement>>('slideImage');
  readonly imageUrls = [
    `${this.cdnBaseUrl}/images/features/splash-screen.png`,
    `${this.cdnBaseUrl}/images/features/introduction.png`,
    `${this.cdnBaseUrl}/images/features/audio.png`,
    `${this.cdnBaseUrl}/images/features/bookmarks.png`,
    `${this.cdnBaseUrl}/images/features/notification.png`,
    `${this.cdnBaseUrl}/images/features/multilingual.png`,
  ];
  private readonly platformId = inject(PLATFORM_ID);
  private isAnimationActive = false;
  private activeAnimations: AnimationPlaybackControlsWithThen[] = [];
  private pendingWaitTimeoutId: number | null = null;
  private pendingWaitResolver: (() => void) | null = null;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const slides = this.slideImages().map((slide) => slide.nativeElement);
    if (!slides.length) {
      return;
    }

    this.isAnimationActive = true;
    void this.startSlideshow(slides).catch(() => {
      this.isAnimationActive = false;
    });
  }

  ngOnDestroy(): void {
    this.isAnimationActive = false;
    this.stopActiveAnimations();
    this.resolvePendingWait();
  }

  private async startSlideshow(slides: HTMLImageElement[]): Promise<void> {
    const { animate } = await import('motion');
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
    this.activeAnimations = animations;
    await Promise.allSettled(
      animations.map((animation) => animation.finished)
    );
    if (this.activeAnimations === animations) {
      this.activeAnimations = [];
    }
  }

  private stopActiveAnimations(): void {
    this.activeAnimations.forEach((animation) => animation.cancel());
    this.activeAnimations = [];
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
