import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.TODO_URL+"/todos");
  }

  public postTodo(todo : Todo): Observable<Todo>{
    console.log(todo);
    return this.http.post<Todo>(environment.TODO_URL+"/save", todo);
  }

  public getTodoById(todoId : number): Observable<Todo>{
    return this.http.get<Todo>(environment.TODO_URL+"/"+todoId)
  }

  constructor(
    private http: HttpClient
  ) { }
}
