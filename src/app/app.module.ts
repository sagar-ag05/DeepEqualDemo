import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { UtilService } from '../services/util.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
