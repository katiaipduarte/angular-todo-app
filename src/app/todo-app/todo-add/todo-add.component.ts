import { Component, OnInit } from '@angular/core';                  // add
import { Store } from '@ngrx/store';                                // add

import { AddTodo } from '@state/todo-list/todo-list.actions';       // add
import { State } from '@state/todo-list/todo-list.state';           // add

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  newTodo = '';

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  addTodo() {
    this.store.dispatch(
        new AddTodo({ name: this.newTodo })
    );
  }
}
