import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHtmlFormComponent } from './ch01-html-forms/basic-html-form/basic-html-form.component';

@NgModule({
  declarations: [AppComponent, BasicHtmlFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
