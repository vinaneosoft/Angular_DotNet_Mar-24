import { Component } from '@angular/core';
import { UserService } from '../myservices/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private userService:UserService){
  }
  logOut(){
    this.userService.logOut();
    window.alert("logged out successfully....");
    // navigate to login
  }
}
