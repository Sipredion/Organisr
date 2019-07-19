import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../services/todo-list.service';
import { Todo } from '@organisr/data';

@Component({
  selector: 'organisr-todos-detail',
  templateUrl: './todos-detail.component.html',
  styleUrls: ['./todos-detail.component.scss']
})
export class TodosDetailComponent implements OnInit {

  todoId: string;
  todo: Todo;
  isEditingTitle: boolean;
  isEditingBody: boolean;

  constructor(private route: ActivatedRoute,
              private todoListService: TodoListService) {
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    this.todoListService.getTodoById(this.todoId).subscribe(todo => {
      this.todo = todo;
    });
  }

  updateTodo(id: string, todo: Todo, editing?: string) {
    editing === 'body' ?
      this.isEditingBody = false :
      this.isEditingTitle = false;
    this.todoListService.updateTodo(todo, id).subscribe();
  }

  deleteTodo(id: string) {
    this.todoListService.deleteTodo(id);
  }

}
