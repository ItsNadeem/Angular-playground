/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClusteringLinkingComponent } from './clustering-linking/clustering-linking.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { BingApiLoaderService } from './bing-api-loader.service';
import { WINDOW_PROVIDERS } from './window.service';

@NgModule({
  declarations: [
    AppComponent,
    ClusteringLinkingComponent,
    AngularHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WINDOW_PROVIDERS, BingApiLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
