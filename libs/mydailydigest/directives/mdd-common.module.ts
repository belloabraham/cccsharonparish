import { NgModule } from '@angular/core';
import { PrimaryDirective } from './colors/primary.directive';
import { LargeDirective } from './sizes/large.directive';
import { SmallDirective } from './sizes/small.directive';


const DIRECTIVES = [PrimaryDirective, LargeDirective, SmallDirective];

@NgModule({
  declarations: [],
  imports: [DIRECTIVES],
  exports: [DIRECTIVES],
})
export class MddCommonModuleModule {}
