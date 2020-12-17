import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../models/Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  tasks: Task[];
  
  ocultarEdit: boolean = true;
  
  constructor(private tasksService: TasksService) { }
  
  
  ngOnInit(): void {
    
      this.tasksService.getTasks().subscribe((data: Task[]) => {
        this.tasks = data
      })
    }
    
    deleteTask(id: any) {
      this.tasksService.deleteTask(id).subscribe();
        const index = this.tasks.indexOf(id);
        this.tasks.splice(index, 1);
     } 
  
     createdNewTask(task) {
     this.tasksService.createdNewTask(task)
    }

    editTask() {
      console.log('editando')
    }
}
