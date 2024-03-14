import { Component } from '@angular/core';
import { UserService } from '../myservices/user.service';
import { Router } from '@angular/router';  //1. 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  flag=false;
  loginError="";
  constructor(private userService:UserService, private router:Router){}  //1.
  login(loginForm:any){
    this.loginError="";
  this.flag=this.userService.loginCheck(loginForm.value.username,loginForm.value.password);
  if(this.flag)
    {
      window.alert("Logged in successfully.......");
      this.router.navigate(['home']);
    }
  else
      this.loginError="Incorrect username or password"
  }
}
