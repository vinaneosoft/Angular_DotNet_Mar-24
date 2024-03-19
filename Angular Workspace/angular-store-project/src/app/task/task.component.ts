import { Component } from '@angular/core';
import { Task } from '../Models/task.model';
import { AppState } from '../Reducers/task.reducer';
import { Store, select } from '@ngrx/store';
import * as Selectors from '../Selectors/task.selectors';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks:Task[]=[]
  mytasks:Task[]=[];
  constructor(private store: Store<AppState>){
    this.store.select("tasks").subscribe({
      next:tasks=>{this.tasks=tasks;
      console.log(this.tasks);
      }
    })
  }
test(data:Task[]){
  console.log(data);
  
}
}
