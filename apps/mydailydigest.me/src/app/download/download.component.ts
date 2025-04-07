import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { Device } from '@cccsharonparish/core';

@Component({
  selector: 'app-download',
  imports: [CommonModule],
  template: `<a #link [href]="url()" hidden></a>`,
})
export class DownloadComponent implements OnInit, AfterViewInit {
  contentId = input<string>();
  url = signal('');
  link = viewChild<ElementRef<HTMLAnchorElement>>('link');

  ngOnInit(): void {
    const androidAppId = environment.androidAppId;
    const iOSAppId = environment.iOSAppId;
    const deviceType = Device.type();
    this.url.set(`${environment.scheme}${environment.domain}`);

    if (deviceType === 'Android') {
      this.url.set(
        `intent://details?id=${androidAppId}#Intent;scheme=market;package=com.android.vending;end;`
      );
      if (this.contentId()) {
        this.url.set(
          `intent://details?id=${androidAppId}&referrer=${this.contentId()}#Intent;scheme=market;package=com.android.vending;end;`
        );
      }
    }

    if (deviceType === 'iOS') {
      this.url.set(`https://apps.apple.com/app/id${iOSAppId}`);
    }
  }
  ngAfterViewInit(): void {
    this.link()?.nativeElement.click();
  }
}
