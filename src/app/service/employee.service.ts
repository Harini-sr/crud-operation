import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDetails, editDetails } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private apiUrl = 'http://localhost:3008/employeeDetails';

  constructor(private http : HttpClient) { }
  getAllData() {
    return this.http.get(this.apiUrl);
  }
  addDetails(data: any): Observable<any> { // Return Observable
    return this.http.post<any>(this.apiUrl, data); // Ensure Observable is returned
  }

  changeDetails(){
    return this.http.get(this.apiUrl)
  }
  updateEmployeeDetails(employeeId: string, submitModel: editDetails){
    return this.http.get(this.apiUrl);
  }

  editAllData(id : any){
    return this.http.get(this.apiUrl, id)
  }
  getallactiverole(){
    return this.http.get(this.apiUrl)
  }
  editDetails(data: any): Observable<any> { // Return Observable
    return this.http.post<any>(this.apiUrl, data); // Ensure Observable is returned
  }
  

    updateDetails(data: editDetails): Observable<any> {
       return this.http.put<any>(`${this.apiUrl}/${data._id}`, data);}
   // Ensure correct URL and method
}  
 