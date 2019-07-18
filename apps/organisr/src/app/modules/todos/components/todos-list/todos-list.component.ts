import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Todo } from '@organisr/data';
import { TodoListService } from '../../services/todo-list.service';
import { ModalService } from '@organisr/ui';

@Component({
  selector: 'organisr-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  @ViewChild('newTodo', { static: true }) newTodo: TemplateRef<HTMLElement>;

  todoList: Array<Todo>;

  constructor(private todoListService: TodoListService,
              private dialogService: ModalService) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoListService.getAllTodos().subscribe(todos => {
      console.log(todos);
      this.todoList = todos;
    });
  }

  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;
    this.updateTodo(todo._id, todo);
  }

  createTodo(todo: Todo) {
    this.todoListService.createTodo(todo).subscribe(result => {
      this.todoList.push(result);
    });
  }

  updateTodo(id: string, todo: Todo) {
    this.todoListService.updateTodo(todo, id).subscribe(result => {
      this.todoList = this.todoList.filter(item => item._id !== result._id);
      this.todoList.push(todo);
    });
  }

  deleteTodo(id: string) {
    this.todoListService.deleteTodo(id).subscribe(m => {
      this.todoList = this.todoList.filter(todo => todo._id !== id);
    });
  }

  openModal() {
    this.dialogService.openModal(this.newTodo);
  }

}
