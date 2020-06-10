import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { from, Observable } from 'rxjs';
import { Task } from '../Task';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
headers :Headers =new Headers();
options:any;
server:string ='http://127.0.0.1:8000/';
  constructor(private http:HttpClient) { 
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-with', 'XMLHttpRequest');

    this.options =new RequestOptions({headers: this.headers});
  }
  addTask(title):Observable<Task>{
const newTask =new Task(title);
return this.http.post<Task>(this.server+ 'add',newTask);
  }
  getTasks():Observable<Task[]>{
   return this.http.get<Task[]>(this.server +'get');
  }
  deleteTask(no):Observable<Task>{
    const newTask ={
      id:no,
      title:'not set',
      status:false,
      date: new Date()
    };
    return this.http.post<Task>(this.server+ 'delete',newTask)
  }
  getOne(no):Observable<Task>{
    const newTask ={
      id:no,
      title:'not set',
      status:false,
      date: new Date()
    };
    return this.http.post<Task>(this.server+'getone',newTask);
  }
}
