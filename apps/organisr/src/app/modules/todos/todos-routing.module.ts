import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosDetailComponent } from './components/todos-detail/todos-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'dash', component: TodosListComponent},
      {path: 'detail/:id', component: TodosDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class TodosRoutingModule {
}
