import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Language, LocaleService } from '@cccsharonparish.org/angular';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  constructor(private localeService: LocaleService) {}

  ngOnInit(): void {
    this.loadDefaultLanguageResource();
  }

  private loadDefaultLanguageResource() {
    this.subscriptions.sink = this.localeService
      .loadLanguage(Language.ENGLISH)
      .subscribe(() => {
        this.localeService.setIsLangLoadSuccessfully(true);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
