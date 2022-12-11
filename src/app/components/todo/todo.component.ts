import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

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
  changeState(todo: Todo, event: any){
    // if(event.isTrusted){
      todo.relatedState = "DONE";
      todo.done = true;
      console.log(todo);

      this.todoService.postTodo(todo);
      // window.location.reload();
    // }


  }
}
