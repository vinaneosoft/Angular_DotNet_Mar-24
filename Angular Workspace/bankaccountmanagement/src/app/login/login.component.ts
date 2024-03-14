import { Component } from '@angular/core';
import { UserService } from '../myservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(private userService:UserService){}
  login(loginForm:any){
  this.userService.loginCheck(loginForm.value.username,loginForm.value.password);
  if(this.userService.loginFlag)
    // navigation logic
  else
  // incorrect username password logic
  }
}
