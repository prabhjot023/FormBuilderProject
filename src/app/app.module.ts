import { Component1Component } from './module1/component1/component1.component';
import { Module1Module } from './module1/module1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { Module2Module } from './module2/module2.module';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,Module1Module,MatButtonModule, BrowserAnimationsModule,HttpClientModule,Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
