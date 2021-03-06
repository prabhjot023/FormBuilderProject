import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    {path :"", component : Component1Component },
    {path :"component2" , component :Component2Component},
    {path:"module2",loadChildren:'./module2/module2.module#Module2Module'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule{ }
