import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }
getAllTasks(){
this.taskService.getTasks().subscribe((all)=>{
  this.tasks=all;
console.log(this.tasks);
});
}
}
