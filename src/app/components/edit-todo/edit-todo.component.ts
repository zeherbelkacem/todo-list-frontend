import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  error = false;
  todo$!: Observable<Todo>
  constructor(
    private router: Router,
    private todoService: TodoService,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.todo$ = this.todoService.getTodoById(this.activateRoute.snapshot.params['id']);
    this.todo$.subscribe({
      next: (data) => console.log(data),
      error: (err) => ((this.error = err.error.details), alert(this.error)),
    });
  }

  modifyTodo(todo: Todo){

  }


}
