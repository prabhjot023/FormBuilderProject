import { Observable } from 'rxjs';
import { SharedServiceService } from './../../shared-service.service';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from "@angular/material";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})

export class Component1Component implements OnInit{
  
  @ViewChild(MatSort,{static: false}) sort:MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator :MatPaginator;
  dataSource:any;

  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age','Action'];
  
  ReceivedData:any;
  ReceivedData1:any;
  count:any;
  data1:any;
  r:any;
  pageSize:any;


  data={
    employee_name:String,
    employee_salary:Number,
    employee_age:Number
  }
  
  

  constructor(public service:SharedServiceService) { }

  ngOnInit(){
    this.get();
  }
    
   get(){
    this.service.getData().subscribe(data =>
      {
      // this.ReceivedData=data.allEmployees;
      this.ReceivedData1=data.allEmployees;
      this.pageSize=data.allEmployees.length;
       this.ReceivedData=new MatTableDataSource<any>(this.ReceivedData1);
      
        this.data1=data.allEmployees;
         this.ReceivedData.sort=this.sort;
         this.ReceivedData.paginator=this.paginator;
     });
    
     
     
  }
 
  applyFilter(event) {
    
    if(event.target.value == '' ){
     this.get();
     // this.ReceivedData.paginator=this.paginator;

    }
    else{
      
      this.ReceivedData=this.data1;
      
    let s=[];
    this.ReceivedData.filter(d=>{
        const filterValue = (event.target.value);
        let name=d.employee_name.toLowerCase();
        
        let salary=d.employee_salary.toString().toLowerCase();
        let age=d.employee_age.toString().toLowerCase();
        if(d.id!=null ){
        let id=d.id.toString().toLowerCase();
        if(name.includes(filterValue.toLowerCase()) || salary.includes(filterValue.toLowerCase()) ||age.includes(filterValue.toLowerCase())  || id.includes(filterValue.toLowerCase()))
        {
          s.push(d);
        }
       
      }
    })
    this.ReceivedData=new MatTableDataSource<any>(s);
    
    this.ReceivedData.sort=this.sort;
         this.ReceivedData.paginator=this.paginator;
    }
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


  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}



