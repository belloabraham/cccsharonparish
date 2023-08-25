import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from '@cccsharonparish.org/angular';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    TranslocoRootModule,
    AppRoutingModule,
    
    //* Instrumentation must be imported after importing StoreModule
    environment.imports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
