import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input()task:Task;
  constructor(private taskService :TaskService) { }

  ngOnInit(): void {
  }
  delete(){
    console.log(this.task.id);
    this.taskService.deleteTask(this.task.id).subscribe((data)=>{
      console.log('task deleted: ', data.id);
    })
  }
}
