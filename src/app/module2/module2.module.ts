import { Module2ServiceService } from './../module2-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { Module2RoutingModule } from './module2-routing.module';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [Component3Component, Component4Component],
  imports: [
    CommonModule,
    Module2RoutingModule,MatCardModule,MatFormFieldModule,MatButtonModule,MatInputModule,ReactiveFormsModule

  ],
  providers:[Module2ServiceService]
})
export class Module2Module { }
