import { MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { SharedServiceService } from '../shared-service.service';
import { Module1RoutingModule } from './module1-routing.module';
import { Component2Component } from './component2/component2.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [
    CommonModule,Module1RoutingModule,MatButtonModule,MatTableModule,MatFormFieldModule,MatInputModule
  ]
  ,providers:[SharedServiceService]
})
export class Module1Module { }
