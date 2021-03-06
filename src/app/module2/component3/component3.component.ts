import { Module2ServiceService } from 'src/app/module2-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  addForm:FormGroup;
  ApiData:any;
  constructor(public service:Module2ServiceService,public formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      id: ['', [Validators.required,Validators.min(3)]],
      employee_name: ['', [Validators.required,Validators.minLength(5)]],
      employee_salary: ['', Validators.required],
      employee_age: ['', [Validators.required]]
    });
    
  }
  sendData(){
    if(this.addForm.valid){
    this.service.sendData(this.addForm.value).subscribe(d=>
      {
        console.log(d.message);
        this.ApiData=d;

        
      });
      
      this.router.navigate(['/comp1']);
     
      

      
    
      // if(this.ApiData.message.equals("Employee Added Successfully!")){
      //   this.router.navigate(["/comp1"]);
      // }
      
      
    
  }
  
  }
}
    
  


