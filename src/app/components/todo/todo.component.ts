import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.listTodoss$.subscribe((t)=>{
      console.log(t);

    })
  }

  getAllTodos(){
    this.listTodoss$ = this.todoService.getAllTodos();
  }
  changeState(relatedState: string, event: any){
    console.log(relatedState);

  }
}
