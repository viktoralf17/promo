import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing , appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { MagitserComponent } from './component/magister.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagitserComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
