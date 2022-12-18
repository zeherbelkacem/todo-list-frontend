import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  listTodoss$!: Observable<Todo[]>;
  error = false;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.listTodoss$ = this.todoService.getAllTodos();
  }

  changeState(todo: Todo, event: any) {
    this.todoService.updateTodo(todo).subscribe({
      next: (data) => window.location.reload(),
      error: (err) => (
        (this.error = err.error.details), this.router.navigateByUrl('/todo')
      ),
    });
  }

  deleteTodo(todoId: number) {
    if (confirm('Are you sure to delete ')) {
      this.todoService.deleteTodo(todoId).subscribe({
        next: (data) => window.location.reload(),
        error: (err) => (
          (this.error = err.error.details), this.router.navigateByUrl('/todo')
        ),
      });
    }
  }
}
