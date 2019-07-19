import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '@organisr/data';

@Injectable({
  providedIn: 'root'
})
export class TodosService extends BaseHttpService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getAllTodos(): Observable<Array<Todo>> {
    const headers = this._setHeaders();
    const url = this._setUrl('todos');
    return this._get<Array<Todo>>(url, headers);
  }

  getTodoById(id: string): Observable<Todo> {
    const headers = this._setHeaders();
    let url = this._setUrl('todos');
    url += `/${id}`;
    return this._get<Todo>(url, headers);
  }

  createTodo(todo: Todo): Observable<Todo> {
    const url = this._setUrl('todos');
    return this._post<Todo>(url, todo);
  }

  updateTodo(todo: Todo, id: string): Observable<Todo> {
    let url = this._setUrl('todos');
    url += `/${id}`;
    return this._put<Todo>(url, todo);
  }

  deleteTodo(id: string): Observable<string> {
    const headers = this._setHeaders();
    let url = this._setUrl('todos');
    url += `/${id}`;
    return this._delete<string>(url);
  }
}
