import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username="admin"; // administrator, bankadminstrator1,...2
  password="Admin@123"
  loginFlag=false; 
  constructor(private cookie:CookieService) { }
  loginCheck(username:string, password:string):boolean{
    // if username includes admin : adminLoginCheck
    //else customerLoginCheck
    return this.adminLoginCheck(username,password);
  }
  adminLoginCheck(username:string, password:string):boolean{
    if(username==this.username && password== this.password){
      this.loginFlag=true
      this.cookie.set("bankadmin",username)
     }
     else
       this.loginFlag=false;
     return this.loginFlag;
  }

  customerLoginCheck(){
    // get data from json
    // convert into array
    // apply find method on array if u get account object then....
    // set ("customer",username)
  }
  logOut(){
    this.loginFlag=false;
    this.cookie.delete("bankadmin");
  }
}
/** AuthorizationGuardService */