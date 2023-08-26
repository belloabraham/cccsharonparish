import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MyDailyDigestPageNotFoundComponent } from '@cccsharonparish.org/mydailydigest/app/page-not-found';
import { Store } from '@ngrx/store';
import { getLanguageLoadedSelector } from '../../store/selectors/language-resource.selector';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  SharedModule,
} from '@cccsharonparish.org/angular';
import { Title } from '@angular/platform-browser';
import { LanguageResourceKey } from './i18n/language-res-key';
import { SubSink } from 'subsink';

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
