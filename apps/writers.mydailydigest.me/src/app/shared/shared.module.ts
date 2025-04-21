import { NgModule } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

const MODULES = [TranslocoModule];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
