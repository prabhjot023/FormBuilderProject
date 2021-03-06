import { MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { SharedServiceService } from '../shared-service.service';
import { Module1RoutingModule } from './module1-routing.module';
import { Component2Component } from './component2/component2.component';



@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [
    CommonModule,Module1RoutingModule,MatButtonModule
  ]
  ,providers:[SharedServiceService]
})
export class Module1Module { }
