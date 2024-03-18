import { Injectable } from '@angular/core';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService {
  constructor(private userService:UserService) { }

  canActivate(): boolean {
    if(this.userService.loginFlag)
      return true
   else
      {
        window.alert("Please login first...");
        // navigate to login component
        return false;
      }
  }
}
