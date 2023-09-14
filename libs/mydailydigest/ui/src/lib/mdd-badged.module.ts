import { NgModule } from "@angular/core";
import { MDDBadgeDirective, MDDBadgeRoundedDirective } from "./directives";
import { MDDRoundedBadgeComponent } from "./components/badge/rounded-badge.component";

const COMMON = [MDDBadgeDirective, MDDRoundedBadgeComponent, MDDBadgeRoundedDirective]

@NgModule({
  imports: COMMON,
  exports: COMMON,
})
export class MDDBadgedModule {}
