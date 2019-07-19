import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@organisr/data';

@Component({
  selector: 'organisr-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {

  @Input() todo: any;
  // @Input() todo: Todo;

  @Output() status = new EventEmitter<any>();
  @Output() delete = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  updateTodoStatus(isComplete: boolean) {
    isComplete ?
      this.todo.isComplete = false :
      this.todo.isComplete = true;
    this.status.emit(this.todo);
  }

  deleteTodo(id: string) {
    this.delete.emit(id);
  }

}
