import { Component } from '@angular/core';
import { Task } from '../Models/task.model';
import { AppState } from '../Reducers/task.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: Task[] = []; // this array contains the tasks from store

  constructor(private store: Store<AppState>){
    this.store.select("tasks").subscribe({
      next:tasks=>{this.tasks=tasks},
      error:err=>console.log(err)
    });
  }
}
