import {
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
  template: ``,
})
export class DownloadComponent implements OnInit {
  contentId = input<string>();
  url = signal('');
  link = viewChild<ElementRef<HTMLAnchorElement>>('link');

  ngOnInit(): void {
    const androidAppId = environment.androidAppId;
    const iOSAppId = environment.iOSAppId;
    const deviceType = Device.type();
    this.url.set(`${environment.scheme}${environment.domain}`);
    const encodedRef = encodeURIComponent(`${this.contentId()}`);

    if (deviceType === 'Android') {
      this.url.set(
        `https://play.google.com/store/apps/details?id=${androidAppId}`
      );
      if (this.contentId()) {
        this.url.update((url) => `${url}&referrer=${encodedRef}`);
      }
    }

    if (deviceType === 'iOS') {
      this.url.set(`https://apps.apple.com/app/id${iOSAppId}`);
      if (this.contentId()) {
        this.url.update((url) => `${url}&ref=${encodedRef}`);
      }
    }
    window.location.href = this.url();
  }
}
