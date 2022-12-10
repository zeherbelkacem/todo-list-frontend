import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  public getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.TODO_URL+"todos");
  }
  constructor(
    private http: HttpClient
  ) { }
}
