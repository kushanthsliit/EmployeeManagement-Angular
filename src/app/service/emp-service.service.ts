import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  baseUrl="http://192.168.43.228:8080/api/employee/";
  constructor(private http : HttpClient) { }

  createEmployee(empRegisterData){
    return this.http.post<any>(this.baseUrl + "createEmployee", empRegisterData);
  }

  getAllEmployees(){
    return this.http.get<any>(this.baseUrl + "getAllEmployees");
  }

  deleteEmployee(id : number){
    return this.http.delete(this.baseUrl + "deleteEmplyee/" + id);
  }

  getEmpData(id : number){
    return this.http.get(this.baseUrl + "getOneEmployee/" + id);
  }
}
