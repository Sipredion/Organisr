import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '@organisr/data';
import { TodoListService } from '../../services/todo-list.service';
import { ModalService } from '@organisr/ui';

@Component({
  selector: 'organisr-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo;
  @Output() create = new EventEmitter<Todo>();

  constructor(private todoService: TodoListService,
              private modalService: ModalService) { }

  ngOnInit() {
    // this.todo = new Todo();
    this.todo = {
      _id: undefined,
      dateCreated: new Date(),
      dateModified: new Date(),
      title: '',
      description: '',
      isComplete: false
    }
  }

  onSubmit(todo: Todo) {
    this.create.emit(todo);
    this.modalService.closeDialog();
  }

}
