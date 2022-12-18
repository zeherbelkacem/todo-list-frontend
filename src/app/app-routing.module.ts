import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DonesComponent } from './components/dones/dones.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {path: 'editTodo/:id', component: EditTodoComponent},
  {path: 'add-todo/:id', component: AddTodoComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'dones', component: DonesComponent},
  { path: '', redirectTo: '/todo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
