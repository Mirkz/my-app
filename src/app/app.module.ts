import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatchModule } from './match/match.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
