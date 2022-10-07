import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  testArray=["Hello", "Nice", "Bye","Good"];
  cssStyle='';
  selectedItem:any;
  red="red";
  green="green";
  state:boolean=false;

  changeStyle(item:any, index:number){
    console.log(item);
    this.state = !this.state;
    console.log(item[index]);
item.style.color="red";
      // item[index].style.color = "red"

    //  else{
    //   this.cssStyle="";
    //  }

  }

  ngOnInit(): void {
  }

}
