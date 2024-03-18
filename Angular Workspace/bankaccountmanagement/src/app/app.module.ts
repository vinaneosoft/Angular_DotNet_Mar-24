import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { PrefixPipe } from './custompipes/prefix.pipe';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { SalaryAccountComponent } from './salary-account/salary-account.component';
import { CustomerComponent } from './customer/customer.component';
import { MathsService } from './myservices/maths.service';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LearningComponent,
    CustomerAccountComponent,
    AccountCardComponent,
    PrefixPipe,
    OrderbyPipe,
    LoginComponent,
    HomeComponent,
    ViewNotFoundComponent,
    SavingsAccountComponent,
    SalaryAccountComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,MatSlideToggleModule,MatButtonModule,MatIconModule,MatDatepickerModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [MathsService, provideAnimationsAsync(), provideNativeDateAdapter()], /**The set of injectable objects that are available in the injector of this module */
  bootstrap: [AppComponent]
})
export class AppModule { }
