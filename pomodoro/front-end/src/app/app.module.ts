import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
// import { TimerComponent } from './timer/timer.component';
import { TaskComponent } from './task/task.component';

import { TasksService } from './tasks.service'
 
@NgModule({
  declarations: [
    AppComponent,
    // TimerComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
