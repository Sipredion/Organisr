import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '@organisr/data';
import { TodosService } from '@organisr/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private todosService: TodosService) {
    todosService._baseUrl = 'http://localhost:3333/api';
  }

  getAllTodos(): Observable<Array<Todo>> {
    return this.todosService.getAllTodos();
  }

  getTodoById(id: string): Observable<Todo> {
    return this.todosService.getTodoById(id);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.todosService.createTodo(todo);
  }

  updateTodo(todo: Todo, id: string): Observable<Todo> {
    return this.todosService.updateTodo(todo, id);
  }

  deleteTodo(id: string): Observable<string> {
    return this.todosService.deleteTodo(id);
  }
}
