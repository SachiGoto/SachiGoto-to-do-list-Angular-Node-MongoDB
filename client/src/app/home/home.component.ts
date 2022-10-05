import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../common-service/service.service';
import{Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:ServiceService, private router:Router, private route:ActivatedRoute) { }
  list:any=[];
  tasks:any=[];
  // lists:any=[];
  input:string="";

  status:boolean = false;

  addItem(item:string){
    console.log(item);

    this.http.postTaks(item).subscribe(newTask=>{
      console.log("added");
      window.location.reload();
      // this.router.navigate(['']);
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

  edit(listedItem:any){
    console.log(listedItem);

  }

  // delete(listedItem:any){
delete(){
    let id:any = this.route.snapshot.paramMap.get("id");
    console.log("id is ", id)

    this.http.deleteTask(id).subscribe(res=>{
      console.log(res);
      try{
        // window.location.reload();
      }catch(error){
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
