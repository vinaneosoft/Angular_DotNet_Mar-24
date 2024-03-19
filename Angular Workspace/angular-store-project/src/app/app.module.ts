import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './Reducers/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, StoreModule.forRoot({tasks:taskReducer})
    /** register same name of store array here */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
