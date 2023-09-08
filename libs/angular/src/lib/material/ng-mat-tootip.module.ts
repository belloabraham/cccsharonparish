import { NgModule } from '@angular/core';
import {
  NgMatTooltipDirective,
  NgMatTooltipButtonDirective,
  NgMatRichTooltipButtonDirective,
  NgMatTooltipContentLinkDirective,
} from './directives';
import {
  NgMaterialRichTooltipComponent,
  NgMaterialTooltipComponent,
} from './components';

const TOOLTIP = [
  NgMatTooltipButtonDirective,
  NgMatTooltipDirective,
  NgMaterialTooltipComponent,
  NgMaterialRichTooltipComponent,
  NgMatRichTooltipButtonDirective,
  NgMatTooltipContentLinkDirective,
];

@NgModule({
  imports: TOOLTIP,
  exports: TOOLTIP,
})
export class NgMatTooltipModule {}
