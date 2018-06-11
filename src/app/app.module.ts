import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhileDirective } from './while.directive';
import { PriorityDirective } from './priority.directive';

@NgModule({
  declarations: [
    AppComponent,
    WhileDirective,
    PriorityDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
