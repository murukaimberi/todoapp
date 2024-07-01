import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TodoListComponent} from "./todos/todo-list/todo-list.component";
import {TodoUpdateComponent} from "./todos/todo-update/todo-update.component";
import {TodoDetailsComponent} from "./todos/todo-details/todo-details.component";
import {NoteListComponent} from "./notes/note-list/note-list.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'todo/new',
    component: TodoUpdateComponent
  },
  {
    path: 'todos/:id/view',
    component: TodoDetailsComponent
  },
  {
    path: 'notes',
    component: NoteListComponent
  }
];
