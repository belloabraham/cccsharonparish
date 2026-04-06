import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  viewChild,
  viewChildren,
} from '@angular/core';
import { isPlatformBrowser, NgFor, NgOptimizedImage } from '@angular/common';
import { APP_REVIEWS } from '../data';
import { MatIconModule } from '@angular/material/icon';
import type { AnimationPlaybackControlsWithThen } from 'motion';

const REVIEW_SCROLL_SPEED_PX_PER_SECOND = 90;

@Component({
  selector: 'app-user-reviews',
  imports: [NgOptimizedImage, NgFor, MatIconModule],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.scss',
})
export class UserReviewsComponent implements AfterViewInit, OnDestroy {
  appReviews = APP_REVIEWS;
  readonly slideTrack = viewChild<ElementRef<HTMLDivElement>>('slideTrack');
  readonly slideGroups = viewChildren<ElementRef<HTMLDivElement>>('slideGroup');
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private activeAnimation: AnimationPlaybackControlsWithThen | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private pendingRestartId: number | null = null;
  private animationVersion = 0;
  private isDestroyed = false;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      void this.startScrollAnimation();
      this.setupResizeObserver();
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    this.animationVersion += 1;
    this.stopAnimation();

    if (this.pendingRestartId !== null) {
      window.cancelAnimationFrame(this.pendingRestartId);
    }

    this.resizeObserver?.disconnect();
  }

  private async startScrollAnimation(): Promise<void> {
    const track = this.slideTrack()?.nativeElement;
    const [primaryGroup, duplicateGroup] = this.slideGroups().map(
      (group) => group.nativeElement
    );

    if (!track || !primaryGroup || !duplicateGroup) {
      return;
    }

    const scrollDistance = duplicateGroup.offsetLeft - primaryGroup.offsetLeft;
    if (scrollDistance <= 0) {
      return;
    }

    const animationVersion = ++this.animationVersion;
    this.stopAnimation();
    track.style.transform = 'translateX(0px)';

    const { animate } = await import('motion');
    if (this.isDestroyed || animationVersion !== this.animationVersion) {
      return;
    }

    this.activeAnimation = animate(
      track,
      { x: [0, -scrollDistance] },
      {
        duration: Math.max(
          scrollDistance / REVIEW_SCROLL_SPEED_PX_PER_SECOND,
          1
        ),
        ease: 'linear',
        repeat: Infinity,
      }
    );
  }

  private setupResizeObserver(): void {
    const track = this.slideTrack()?.nativeElement;
    const [primaryGroup, duplicateGroup] = this.slideGroups().map(
      (group) => group.nativeElement
    );

    if (
      !track ||
      !primaryGroup ||
      !duplicateGroup ||
      typeof ResizeObserver === 'undefined'
    ) {
      return;
    }

    this.resizeObserver = new ResizeObserver(() => {
      if (this.pendingRestartId !== null) {
        window.cancelAnimationFrame(this.pendingRestartId);
      }

      this.pendingRestartId = window.requestAnimationFrame(() => {
        this.pendingRestartId = null;
        void this.startScrollAnimation();
      });
    });

    this.resizeObserver.observe(track.parentElement ?? track);
    this.resizeObserver.observe(primaryGroup);
    this.resizeObserver.observe(duplicateGroup);
  }

  private stopAnimation(): void {
    this.activeAnimation?.cancel();
    this.activeAnimation = null;
  }
}
