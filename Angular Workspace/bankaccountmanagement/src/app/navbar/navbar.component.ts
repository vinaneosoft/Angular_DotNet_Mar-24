import { Component } from '@angular/core';
import { UserService } from '../myservices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private userService:UserService, private router:Router){
  }
  loginTest(){
    return this.userService.loginFlag;
  }
  logOut(){
    this.userService.logOut();
    window.alert("logged out successfully....");
    this.router.navigate(['login'])
  }
}
