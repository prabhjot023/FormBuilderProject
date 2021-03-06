import { Component3Component } from './module2/component3/component3.component';
import { Component1Component } from './module1/component1/component1.component';
import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component4Component } from './module2/component4/component4.component';


const routes: Routes = [
  {path:'',component: DemoComponent,pathMatch:'full'},
  // {path: 'lazy', loadChildren: './module1/module1.module#Module1Module'},
  {path:'comp1',component: Component1Component,pathMatch :'full'},
  {path:'comp4',component:Component4Component,pathMatch:'full'},
  {path:'comp3',component:Component3Component,pathMatch:'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
