import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './CustomComponents/todo-list/todo-list.component';
import { TodoFormComponent } from './CustomComponents/todo-form/todo-form.component';
import { AddBtnComponent } from './CustomComponents/Shared/add-btn/add-btn.component';
import { TodoItemComponent } from './CustomComponents/todo-item/todo-item.component';
import { DeleteBtnComponent } from './CustomComponents/Shared/delete-btn/delete-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    AddBtnComponent,
    TodoItemComponent,
    DeleteBtnComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
