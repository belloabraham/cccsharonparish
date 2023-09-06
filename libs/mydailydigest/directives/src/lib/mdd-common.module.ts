import { NgModule } from "@angular/core";
import { MDDBadgeDirective } from "./badge/badge.directive";
import { MDDIconDirective } from "./icon/icon.directive";

const COMMON = [MDDBadgeDirective, MDDIconDirective]

@NgModule({
  imports: COMMON,
  exports: COMMON,
})
export class MDDCommonModule {}
