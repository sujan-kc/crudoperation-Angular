import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Test1Component } from './components/test1/test1.component';
import { FormComponent } from './components/form/form.component';
import { FormService } from './service/form.service';
import { AddformComponent } from './components/form/addform/addform.component';

@NgModule({
  declarations: [
    AppComponent,

    FormComponent,
     AddformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
