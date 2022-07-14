/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ClusteringLinkingComponent } from './clustering-linking/clustering-linking.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { BingApiLoaderService } from './bing-api-loader.service';
import { WINDOW_PROVIDERS } from './window.service';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';


@NgModule({
  declarations: [
    AppComponent,
    ClusteringLinkingComponent,
    AngularHomeComponent,
    TaskComponent,
    TasksBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [WINDOW_PROVIDERS, BingApiLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
