import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-dones',
  templateUrl: './dones.component.html',
  styleUrls: ['./dones.component.css']
})
export class DonesComponent implements OnInit {

  listTodoss$!: Observable<Todo[]>;
  error = false;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.listTodoss$ = this.todoService.getAllDoneTODOS();
  }

}
