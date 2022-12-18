import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  todo$!:Observable<Todo>
  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id'];

    if(id !== 0){
      this.todo$ = this.todoService.getTodoById(id);
      this.todo$.subscribe((t)=>{
        this.myTodoForm = this.fb.group({
          id: [t.id],
          title: [t.title, Validators.required],
          description: [t.description],
        });
      })
    }
      this.myTodoForm = this.fb.group({
        id: [0],
        title: ['', Validators.required],
        description: [],
      });
      }

  addTodo(myTodoForm: FormGroup) {
    this.todoService
      .postTodo({
        id: myTodoForm.value.id,
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
