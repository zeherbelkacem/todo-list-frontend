import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {path: 'editTodo/:id', component: EditTodoComponent},
  {path: 'add-todo', component: AddTodoComponent},
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  {path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
