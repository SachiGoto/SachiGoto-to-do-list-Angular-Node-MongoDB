import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../common-service/service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:ServiceService, private route:Router) { }
  userName:string='';
  password:string='';

  login(){
     this.http.logIn(this.userName, this.password).subscribe(user=>{
             if(user.login == true){
                       console.log("logged in ")
                       this.route.navigate(["/"]);
                       
             }else{
              console.log("not logged in ")
              
             }
     })
  }


  ngOnInit(): void {
  }

}
