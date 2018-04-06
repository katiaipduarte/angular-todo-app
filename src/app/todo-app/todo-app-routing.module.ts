import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAppComponent } from './todo-app.component';

// for lazy loading
const routes: Routes = [{
  path: '',
  component: TodoAppComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
