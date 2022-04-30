import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Modulos
import { PagesModule } from './pages/pages.module';

//Components


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PagesModule,
    BrowserModule, //So aparece no modulo principal
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
