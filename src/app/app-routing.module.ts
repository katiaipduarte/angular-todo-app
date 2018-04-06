import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Correct form to do lazy loading
const routes: Routes = [{
  path: '',
  loadChildren: 'app/home/home.module#HomeModule'
}, {
  path: 'about',
  loadChildren: 'app/about/about.module#AboutModule'
}, {
  path: 'todo',
  loadChildren: 'app/todo-app/todo-app.module#TodoAppModule'
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
