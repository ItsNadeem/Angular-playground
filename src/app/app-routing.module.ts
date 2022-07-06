import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClusteringLinkingComponent } from './clustering-linking/clustering-linking.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';


const routes: Routes = [{ path: '',   component: AngularHomeComponent }, { path: 'cl', component: ClusteringLinkingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
