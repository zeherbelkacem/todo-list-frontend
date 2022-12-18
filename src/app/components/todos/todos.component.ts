import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  listTodoss$!: Observable<Todo[]>;
  error = false;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.listTodoss$ = this.todoService.getAllTodoTODOS();
  }

}
