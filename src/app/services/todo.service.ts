import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public getAllTodoTODOS(): Observable<Todo[]>{
    return this.http.get<Todo[]>("http://localhost:8086/api/todo/v1/todos");
  }

  public getAllDoneTODOS(): Observable<Todo[]>{
    return this.http.get<Todo[]>("http://localhost:8086/api/todo/v1/dones");
  }
  public getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>("http://localhost:8086/api/todo/v1/");
  }

  public postTodo(todo : Todo): Observable<Todo>{
    return this.http.post<Todo>("http://localhost:8086/api/todo/v1/", todo);
  }

  public updateTodo(todo : Todo): Observable<Todo>{
    return this.http.put<Todo>("http://localhost:8086/api/todo/v1/"+todo.id, todo);
  }

  public getTodoById(todoId : number): Observable<Todo>{
    return this.http.get<Todo>("http://localhost:8086/api/todo/v1/"+todoId)
  }

  deleteTodo(todoId: number) {
    return this.http.delete("http://localhost:8086/api/todo/v1/"+todoId);
  }

  constructor(
    private http: HttpClient
  ) { }
}
