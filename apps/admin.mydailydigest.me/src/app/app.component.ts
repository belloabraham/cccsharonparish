import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import {
  LoadLanguageResourceActionState,
  getLoadLanguageResourceActionGroup as getLoadLanguageResourceActionGroup,
} from '../store/actions/language-resource.actions';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  Language,
} from '@cccsharonparish.org/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  constructor(
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService
  ) {}

  ngOnInit(): void {
    this.loadLanguageResource(Language.ENGLISH, () => {
      this.onLanguageResourceLoaded();
    });
  }

  private loadLanguageResource(
    language: string,
    onLanguageResourceLoaded: () => void
  ) {
    this.subscriptions.sink = this.languageResourceService
      .loadLanguageResource(language)
      .subscribe(() => {
        onLanguageResourceLoaded();
      });
  }

  onLanguageResourceLoaded() {
    const loadLanguageResourceActionState: LoadLanguageResourceActionState = {
      loaded: true,
    };
    const loadLanguageResourceAction =
      getLoadLanguageResourceActionGroup().loadLanguageResourceAction(
        loadLanguageResourceActionState
      );
    this.ngrxStore.dispatch(loadLanguageResourceAction);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
