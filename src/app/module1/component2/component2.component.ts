import { SharedServiceService } from './../../shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  id:any;
  name:any;
  age:any;
  salary:any;
  constructor(public service:SharedServiceService) { }

  ngOnInit() {

    

    this.service.getDataByID().subscribe(res =>
      {
      
        console.log(res.data);
        
            this.id=res.data.id;
            this.name=res.data.employee_name;
            this.age=res.data.employee_age;
            this.salary=res.data.employee_salary;
         }
        
         );


    
     
 
   
}

}
