import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-audio-player',
  imports: [CommonModule],
  templateUrl: './ng-audio-player.component.html',
  styleUrl: './ng-audio-player.component.scss',
})
export class NgAudioPlayerComponent implements OnInit, AfterViewInit {
  private observer?: IntersectionObserver;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @Input({ required: true }) src!: string | URL;
  @Input() muted = false;
  @Input() autoplay = false;
  @Input() controls = true;
  @Input() type = 'mpeg';
  @Input() pauseWhenNotInView = true;
  @Input() intersectionRatio = 0.3;
  audioType = '';
  
  ngOnInit(): void {
    this.audioType = `audio/${this.type}`;
  }

  ngAfterViewInit(): void {
    if (this.pauseWhenNotInView) {
      this.pauseAudioWhenNotInView();
    }
  }

  private pauseAudioWhenNotInView() {
    const audioPlayer = this.audioPlayer.nativeElement as HTMLAudioElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const audioIsNotInView = !entry.isIntersecting;
          if (audioIsNotInView) {
            audioPlayer.pause();
          }
        });
      },
      { threshold: this.intersectionRatio }
    );
    this.observer.observe(audioPlayer);
  }
}
