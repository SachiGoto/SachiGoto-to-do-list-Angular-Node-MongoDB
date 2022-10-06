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

  status:boolean = false;
  complete:boolean = false;

  markItem(item:any, itemId:any){
    console.log(item);
    // [item.style.display] = "none";
    // [item.style.display] = "none";
    // if(this.complete=="block"){
    //   // this.complete = "color:grey; text-decoration:line-through"
    //   [style.display] =
    // }else{
    //   this.complete = "";
    // }
    this.complete = !this.complete;
    // let id:any = this.route.snapshot.paramMap.get("id");
    console.log(itemId);
    this.http.putTasks(itemId, this.item, this.complete).subscribe(res=>{
                 console.log("updated");
                 console.log(res)
    })
    this.router.navigate(['']);
    // this.http.putTasks()





  }

  addItem(item:string){
    console.log(item);

    this.http.postTaks(item).subscribe(newTask=>{
      console.log("added");
      window.location.reload();
      this.router.navigate(['']);
    })

    this.http.getTasks().subscribe(item=>{
      this.tasks = item

      console.log(this.tasks);
    })
    // console.log(item);
    // this.list.push(item);


    // this.input="";
    // this.lists.push(this.list);
    // this.list = [];

  }

  // edit(listedItem:any){
  //   console.log(listedItem);

  // }

  // delete(listedItem:any){
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

    // window.location.reload();

    //   this.status=true;
    //  if(listedItem.style.display == "block"){
    //   listedItem.style.display = "none";
    //  }else{
    //   listedItem.style.display = "block";
    //  }


  }









  ngOnInit(): void {

     console.log("Hello")
    this.http.getTasks().subscribe(item=>{
      this.tasks = item

      console.log(this.tasks);
    })




  }

}
