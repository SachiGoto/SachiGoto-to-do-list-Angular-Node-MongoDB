import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  list:any=[];
  // lists:any=[];
  input:string="";

  status:boolean = false;

  addItem(item:string){
    console.log(item);
    this.list.push(item);


    this.input="";
    // this.lists.push(this.list);
    // this.list = [];

  }

  edit(listedItem:any){
    console.log(listedItem);

  }

  delete(listedItem:any){
     //  this.status=true;
     if(listedItem.style.display == "block"){
      listedItem.style.display = "none";
     }else{
      listedItem.style.display = "block";
     }


  }









  ngOnInit(): void {
  }

}
