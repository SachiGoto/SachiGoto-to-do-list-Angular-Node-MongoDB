import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../common-service/service.service';
import{Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { style } from '@angular/animations';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:ServiceService, private router:Router, private route:ActivatedRoute) { }
  list:any=[];
  tasks:any=[];
  item:any='';
  // lists:any=[];
  input:string="";

  // status:boolean = false;
  complete:boolean = false;
  // isComplete='';

  markItem(item:any, itemId:any){
    this.complete = !this.complete;
    if(this.complete === false){
      item.style.color='';
      item.style.textDecoration=""
      // this.isComplete ='';
    }else{
      item.style.color="grey";
      item.style.textDecoration="line-through"
      // this.isComplete='color:grey; text-decoration:line-through'
    }

    console.log("complete ", this.complete)

    // if(this.complete === true){
    //   this.isComplete = 'color:grey;background-color:pink';
    //   // this.isComplete ='';
    // }else{
    //    this.isComplete = '';
    // }

    console.log(item)
    this.http.putTasks(itemId, this.item, this.complete).subscribe(res=>{
                 console.log("updated");
                 console.log(res)
    })
    this.router.navigate(['']);
  }

  addItem(item:string){
    console.log(item);

    this.http.postTaks(item).subscribe(newTask=>{
      console.log("added", item);

      window.location.reload();
      this.router.navigate(['']);
    })

    this.http.getTasks().subscribe(item=>{
      this.tasks = item

      console.log(this.tasks);
    })
  }


delete(itemId:any){
    // let id:any = this.route.snapshot.paramMap.get("id");
    console.log("id is ", itemId)

    this.http.deleteTask(itemId).subscribe(res=>{
      console.log(res);

      try{
        window.location.reload();
        this.router.navigate(['home']);



      }catch(error){
        // this.router.navigate(['home']);
        console.log(error)
      }
    })

  }


  ngOnInit(): void {

    this.http.getTasks().subscribe(item=>{
      this.tasks = item

      console.log(this.tasks);
    })




  }

}
