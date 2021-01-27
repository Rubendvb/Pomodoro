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

  // ============ Relógio ============

  title: string = 'Timer';
  minutos: number;
  minutos2: number;
  segundos: number;
  segundos2: number;
  vezes: number = 0;
  paused: boolean = true;
  paused2: boolean = true;
  
  buttonLabel: string;
  buttonLabel2: string;
  
  relogio: any;
  relogio2: any;
  confirmar: any; //Mensagem na tela
  confirmar2: any;

  // ======================================
  
  constructor(private tasksService: TasksService) { 

    this.contar();
    setInterval(() => this.tick(), 10000);
  }
  
  
  ngOnInit(): void {
    
    this.tasksService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data
    })
      
    // =============== Relógio ===============
    this.minutos = 25;
    this.segundos = 0;
    this.segundos2 = 0;
    this.minutos2 = 5;
    this.buttonLabel = 'Empezar';
    //====================================

    }
    
    
    createdNewTask(task) {
      this.tasksService.createdNewTask(task)
      
    }

    
    editTask(): void {
      this.ocultarEdit = false;
      
      console.log('editando')
    }

    updateTask(task, task_id){
      this.ocultarEdit = true;

      this.tasksService.updateTask(task, task_id)
    }
    
    deleteTask(id: any) {
    this.tasksService.deleteTask(id).subscribe();
    const index = this.tasks.indexOf(id);
        this.tasks.splice(index, 1);
     } 

     //================Relógio=============
contar(): void {
    this.minutos = 25;
    this.segundos = 0;
    this.minutos2 = 5;
    this.segundos2 = 0;
    this.buttonLabel = 'Empezar';
    this.buttonLabel2 = 'Empezar';
  }

  redefinirPomo(): void {
    this.minutos = 25;
    this.segundos = 0;
    this.confirmar = "";
  }


  private tick(): void {
    if(!this.paused) {
      this.buttonLabel = 'Detener';

      if(--this.segundos < 0) {
        this.segundos = 59;
        if(--this.minutos < 0) {
          this.minutos = 0;
          this.segundos = 0;
         }

         if(this.minutos > 0 && this.segundos  < 60) {
          this.confirmar = 'Hora de trabalhar'

        }
        if(this.minutos === 0 && this.segundos  === 0) {
          this.confirmar = 'Hora de descansar ou reset para voltar'
        }
      }
    }
  }

  iniciarPomo(): void{
    this.paused = !this.paused;

    if (!this.paused && this.relogio === undefined) {
      this.relogio = setInterval(() => this.tick(), 1000);
    }
  }

   redefinirdescanso(): void {
      this.minutos2 = 5;
      this.segundos2 = 0;

    }

  descansarPomo() {
    this.paused2 = !this.paused2;
    if (!this.paused2 && this.relogio2 === undefined) {
      this.relogio2 = setInterval(() => this.tack(), 10);
      if(this.segundos2 > 0) { }
   }
  }

  private tack(): void {
    if(!this.paused2) {
      this.buttonLabel2 = 'Detener';


      if(--this.segundos2 < 0) {
        this.segundos2 = 59;
        if(--this.minutos2 < 0) {
          this.minutos2 = 0;
          this.segundos2 = 0;
        }
        if(this.minutos2 == 0 && this.segundos2 < 0) {
          this.confirmar2 =  "Reset para voltar ao trabalho";
        }
      }
    }
  }

}