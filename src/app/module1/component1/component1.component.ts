import { SharedServiceService } from './../../shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  ReceivedData:any;
  data={
    employee_name:String,
    employee_salary:Number,
    employee_age:Number
  }
  
  
  constructor(public service:SharedServiceService) { }

  ngOnInit(){
    this.service.getData().subscribe(data =>
      {
        this.ReceivedData=data.allEmployees;
        
     });

  
   
  }
 

  deleteData(i)
  {
   
        this.data.employee_name=i.employee_name;
        this.data.employee_salary=i.employee_salary;

        this.data.employee_age=i.employee_age;
    
    this.service.deleteData(i.id,this.data).subscribe(d=>
      {
        if(d.data.ok==1)
        {
          alert("Data deleted successfully");
          window.location.reload();
        }
      });
     // window.location.reload();
  }



}
