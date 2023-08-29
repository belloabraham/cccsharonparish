import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  LanguageResourceKey,
  MyDailyDigestPageNotFoundComponent,
} from '@cccsharonparish.org/mydailydigest/app/page-not-found';
import { Store } from '@ngrx/store';
import { getLanguageLoadedSelector } from '../../store/selectors/language-resource.selector';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  SharedModule,
} from '@cccsharonparish.org/angular';
import { Title } from '@angular/platform-browser';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SharedModule, MyDailyDigestPageNotFoundComponent],
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();

  constructor(
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.onLanguageResourceLoad();
  }

  onLanguageResourceLoad() {
    this.subscriptions.sink = this.ngrxStore
      .select(getLanguageLoadedSelector())
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
