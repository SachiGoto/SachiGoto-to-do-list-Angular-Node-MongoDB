import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = "http://localhost:3000";
    constructor(private http:HttpClient) { }

    getTasks(){
      return this.http.get(this.url);

    }

    postTaks(task:string){
     let addNewTask={
      task:task
     }

      return this.http.post(this.url + "/task", addNewTask);
    }

    // id, this.item, this.complete  ---- from angular
    // format in MongoDB
    // _id
    // task
    // completed


    putTasks(id:any,task:string, complete:boolean){
      let taskBody={
        _id:id,
        task:task,
        completed:complete

      }

      return this.http.put<{message:any}>(this.url + "/markComplete", taskBody );

    }

    deleteTask(id:any){
      return this.http.delete(this.url + "/deleteTask/" + id);
    }
}
