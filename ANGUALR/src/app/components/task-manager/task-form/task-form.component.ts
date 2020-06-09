import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
title: string;
  constructor(private ts:TaskService) { }

  ngOnInit(): void {
  }
Add(e){
  e.preventDefault();
  console.log(this.title);
  this.ts.addTask(this.title).subscribe((data)=>{
    console.log("task added" );
  });
}
}
