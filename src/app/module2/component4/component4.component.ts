import { SharedServiceService } from './../../shared-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Module2ServiceService } from 'src/app/module2-service.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  addForm:FormGroup;
  ApiData:any;
  constructor(public formBuilder:FormBuilder,public service:Module2ServiceService,private router:Router,private sharedService:SharedServiceService) { }

  ngOnInit() {

    this.addForm=this.formBuilder.group({
      id: ['', [Validators.required,Validators.min(3)]],
      employee_name: ['', [Validators.required,Validators.minLength(5)]],
      employee_salary: ['', Validators.required],
      employee_age: ['', [Validators.required]]
    });
    this.sharedService.getDataByID().subscribe(d =>{
      console.log(d.data);
      this.addForm.setValue({
     id:d.data.id,
     employee_name:d.data.employee_name,
     employee_salary:d.data.employee_salary,
     employee_age:d.data.employee_age})
    });
   
}

  

  

  updateData()
  {
    this.sharedService.updateData(this.addForm.value).subscribe(d =>{
      if(d!=null){
        this.router.navigate(['/comp1']);
        }

    });

    //this.router.navigate(['/comp1']);
  }
}