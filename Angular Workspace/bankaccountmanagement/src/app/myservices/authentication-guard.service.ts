import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService {
  constructor() { }
  canActivate(): boolean {
   console.log("Guard activated");
   
    return false;
  }
}
