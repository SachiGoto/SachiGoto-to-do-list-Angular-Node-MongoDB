import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


    constructor(private http:HttpClient) { }
    // private url = environment.server;
    private url = environment.server;
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
