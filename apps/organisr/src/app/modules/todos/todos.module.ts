import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosDetailComponent } from './components/todos-detail/todos-detail.component';
import { HttpModule, TodosService } from '@organisr/http';
import { UiModule } from '@organisr/ui';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { TodoButtonColorPipe } from './pipes/todo-button-color.pipe';

@NgModule({
  declarations: [TodosListComponent, TodosDetailComponent, CreateTodoComponent, SingleTodoComponent, TodoButtonColorPipe],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpModule,
    UiModule,
    FormsModule
  ],
  providers: [TodosService]
})
export class TodosModule { }
