import { Component } from '@angular/core';
import { Task } from '../Models/task.model';
import { AppState } from '../Reducers/task.reducer';
import { Store} from '@ngrx/store';
import { addTask,updateTask,deleteTask } from '../Actions/task.actions';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  idCounter=1;
  tasks:Task[]=[]
  mytasks:Task[]=[];
  constructor(private store: Store<AppState>){
    this.store.select("tasks").subscribe({
      next:tasks=>{this.tasks=tasks;
      console.log(this.tasks);
      }
    })
  }
  addNewTask(taskForm:any){
    const newTask: Task = {
      id:this.idCounter++,
      title:taskForm.value.title,
      description: taskForm.value.description
    };
    this.store.dispatch(addTask({ task: newTask }));
  }
  delTask(id:number){
    this.store.dispatch(deleteTask({ id }));
  }
}
