import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from "./pages/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    Ng2SmartTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
