import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { SalaryAccountComponent } from './salary-account/salary-account.component';

const routes: Routes = [
 { path:"", redirectTo:"home", pathMatch:'full'},
 { 
    path:"home" , 
    component:HomeComponent, 
    children: [
      {path:'savingsacc', component:SavingsAccountComponent},
      {path:'salaryacc', component:SalaryAccountComponent},
    ]
 },
 { path:"bankaccounts" , component:CustomerAccountComponent},
 { path:"login" , component:LoginComponent},
 { path:'**', component:ViewNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
