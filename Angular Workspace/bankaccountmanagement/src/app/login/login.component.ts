import { Component } from '@angular/core';
import { UserService } from '../myservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  flag=false;
  constructor(private userService:UserService){}
  login(loginForm:any){
  this.flag=this.userService.loginCheck(loginForm.value.username,loginForm.value.password);
  if(this.flag)
    // navigation logic
  else
  // incorrect username password logic
  }
}
