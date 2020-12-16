import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  minutos: number;
  segundos: number;
  vezes: number = 0;
  
  tasks: any = [];
  item: any = '';
  item2: any = '';
  
  ocultarEdit: boolean = true;
  
  constructor(private tasksService: TasksService) { }
  
  ngOnInit(): void {
    this.getTask()
  }
  getTask() {
    this.tasksService.getTasks().subscribe(data => this.tasks= data)
  }
  postTask(){
    this.tasksService.postTask
  }
  aggTarefa():void {
    /* if (this.vezes % 4 === 0) {
      this.minutos = 25
      this.segundos = 0
    } */
    this.tasks.push(this.item)
    this.item = '';
  }
  
  myValue;
  editTarefa(i): void {
    this.ocultarEdit = false;
    this.item2 = this.tasks[i];
    this.myValue = i;
  }
  
  actTarefa(): void {
    this.ocultarEdit = true;
    let i = this.myValue;
    for ( let j = 0; j < this.tasks.length; j++) {
      if (i == j) {
        this.tasks[i] = this.item2;
        this.item2 = '';
        console.log(this.item2.value);
      }
    }
  }
  
  deletTarefa(i) {
    var resposta = confirm('Deseja eliminar tarefa?');
    if (resposta) {
      this.tasks.splice( i, 1)
    }
  }
  



}
