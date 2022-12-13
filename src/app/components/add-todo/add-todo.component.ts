import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  myTodoForm!: FormGroup;
  error = false;
  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myTodoForm = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      description: [],
    });
  }

  addTodo(myTodoForm: FormGroup) {
    this.todoService
      .postTodo({
        id: 0,
        title: myTodoForm.value.title,
        relatedState: 'TODO',
        done: false,
        description: myTodoForm.value.description,
      })
      .subscribe({
        next: (data) => this.router.navigate(['/']),
        error: (err) => ((this.error = err.error.details), alert(this.error)),
      });
  }

  get title() {
    return this.myTodoForm.get('title');
  }
}
