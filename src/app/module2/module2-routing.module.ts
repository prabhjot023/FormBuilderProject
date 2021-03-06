import { Component1Component } from './../module1/component1/component1.component';
import { Component4Component } from './../module2/component4/component4.component';
import { Component3Component } from './../module2/component3/component3.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:"", component:Component4Component},
  //{ path:"comp", component:Component1Component},

 // { path:"comp4", component:Component4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
