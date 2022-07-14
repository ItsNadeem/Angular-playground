import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClusteringLinkingComponent } from './clustering-linking/clustering-linking.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';


const routes: Routes = [
  {path: '',   component: AngularHomeComponent}, 
  {path: 'cl', component: ClusteringLinkingComponent},
  {path: 'board', component: TasksBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
