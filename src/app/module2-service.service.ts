import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Module2ServiceService {

  constructor(private http:HttpClient) { }


  sendData(i):Observable<any>
  {
    console.log(i);
    return this.http.post<any>("http://www.appgrowthcompany.com:5069/api/v1/employee/create",i);
    
  }
  getData()
  {
    return this.http.get<any>("http://www.appgrowthcompany.com:5069/api/v1/employee/getAll");
    
  }

 
  
}
