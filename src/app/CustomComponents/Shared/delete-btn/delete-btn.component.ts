import { Todo } from './../../../Todo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.scss'],
})
export class DeleteBtnComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {
    console.log(this.todo);
  }

  ngOnInit(): void {}

  onClick(todo: Todo) {
    console.log(todo.todo_title);
  }
}
