import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todo$!: Observable<Todo>
  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.todo$ = this.todoService.getTodoById(this.activateRoute.snapshot.params['id']);
  }


}
