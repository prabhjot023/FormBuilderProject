import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  ApiData:any;
  SelectedId:any;
  obj:any;
  deleteId:any;

  constructor(public http: HttpClient, private route:ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
     
      this.SelectedId=params.id;
      this.deleteId=params.id1;
      
     })
  }

  deleteData(i,ob):Observable<any>
  {
    
   return this.http.delete("http://www.appgrowthcompany.com:5069/api/v1/employee/delete/"+i,ob);
  }

  getData():Observable<any>
  {
    return this.obj=this.http.get<any>("http://www.appgrowthcompany.com:5069/api/v1/employee/getAll");
    
  }

  getDataByID()
  {
   
    console.log(this.SelectedId);
    return this.http.get<any>("http://www.appgrowthcompany.com:5069/api/v1/employee/get/"+this.SelectedId);
    
    
    
  }

  updateData(obj){
    console.log(obj);
    console.log(this.SelectedId);
  return  this.http.put<any>("http://www.appgrowthcompany.com:5069/api/v1/employee/update/"+this.SelectedId,obj);
  }

  getId(i)
  {
    this.SelectedId=i;
  }

  



}
