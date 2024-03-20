
import { Task } from '../Models/task.model';
import { addTask, updateTask, deleteTask } from '../Actions/task.actions';
export interface AppState {
  tasks: Task[];
}
 export const initialState: AppState = {
  tasks: [
    {
      id:1,
      title:"JS training",
      description:'training to be completed in 2 days'
    }
  ]
}; 

export function taskReducer(state = initialState, action:any): AppState {
  switch (action.type) { // type and payload is built in key, 
    case addTask.type:
      return { ...state, tasks
        : [...state.tasks, action.task] };
    case updateTask.type:
        state.tasks=state.tasks.map(task => (task.id === action.task.id ? action.task : task))
        return state;
    case deleteTask.type:
        state.tasks=state.tasks.filter(task=>task.id!==action.task.id)
        return state;
    default:
      return state;
  }
}