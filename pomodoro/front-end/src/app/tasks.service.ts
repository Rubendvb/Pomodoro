import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) { }
  
  getTasks() {
    return this.http.get(`${ this.url }`)
  }

  editTask(task_id) {
    console.log(task_id)
    return this.http.get(`${ this.url }/${ task_id }`)
  }
  
  
  
  createdNewTask(task) {
    const tarefa = {  
      task 
    }
    
    return this.http.post(this.url, tarefa).subscribe()
  }
  
  updateTask(task: any, task_id) {
   console.log(task_id)
    const tasks = {
      task,
      task_id,
    }
    console.log(tasks)
    return this.http.put(`${ this.url }/${ task_id }`, tasks).subscribe((res) => console.log('aaaaaaaaaaaaaaaa'))
   } 
  
   deleteTask(id) {
      return this.http.delete(`${this.url}/${id}`)
    }
    
}
