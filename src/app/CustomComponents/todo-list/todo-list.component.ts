import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sr_no: 1,
        todo_title: 'First',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, id saepe! Cupiditate laborum ipsum tempora facilis, tenetur quasi deserunt sed? Lorem ipsum dolor sit amet consectetur adipisicing',
        active: true,
      },
      {
        sr_no: 2,
        todo_title: 'Second',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, id saepe! Cupiditate laborum ipsum tempora facilis, tenetur quasi deserunt sed? Lorem ipsum dolor sit amet consectetur adipisicing',
        active: true,
      },
      {
        sr_no: 3,
        todo_title: 'Third',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, id saepe! Cupiditate laborum ipsum tempora facilis, tenetur quasi deserunt sed? Lorem ipsum dolor sit amet consectetur adipisicing',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}
}
