import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  LanguageResourceKey,
  MyDailyDigestPageNotFoundComponent,
} from '@cccsharonparish.org/mydailydigest/app/page-not-found';
import { SubSink } from 'subsink';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  SharedModule,
} from '@cccsharonparish.org/angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SharedModule, MyDailyDigestPageNotFoundComponent],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  constructor(
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.onLanguageResourceLoaded();
  }

  onLanguageResourceLoaded() {
    this.subscriptions.sink = this.languageResourceService
      .getLanguageLoadSuccessfully$()
      .subscribe(() => {
        const pageTitle = this.languageResourceService.getString(
          LanguageResourceKey.PAGE_TITLE
        );
        this.title.setTitle(pageTitle);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
