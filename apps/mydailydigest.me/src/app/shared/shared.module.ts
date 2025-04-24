import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const STANDALONE = [FooterComponent, HeaderComponent];

@NgModule({
  imports: [...STANDALONE],
  exports: [...STANDALONE],
})
export class SharedModule {}
