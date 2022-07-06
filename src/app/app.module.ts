import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClusteringLinkingComponent } from './clustering-linking/clustering-linking.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
