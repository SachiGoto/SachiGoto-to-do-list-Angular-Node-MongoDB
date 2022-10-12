import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../common-service/service.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http:ServiceService) { }
  userName:string ='';
  email:string='';
  password:string='';
  rePassword:string='';

signUp(){
  console.log(this.userName)
  if(this.password === this.rePassword){
    this.http.signUp(this.userName, this.email, this.password).subscribe(user=>{
      console.log("user added");


    })

  }else{
    console.log("passwords don't match")
  }



}



  ngOnInit(): void {
  }

}
