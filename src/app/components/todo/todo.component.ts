import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  listTodoss$!:Observable<Todo[]>
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos(){
    this.listTodoss$ = this.todoService.getAllTodos();
  }
}
