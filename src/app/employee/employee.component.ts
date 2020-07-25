import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../service/emp-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = [];
  public empRegisterData = {};
  public empData = {};
  public empUpdateData = {};
  constructor(private service : EmpServiceService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  onSubmit(){
    // console.log(this.empRegisterData);
    this.service.createEmployee(this.empRegisterData).subscribe(e => this.empRegisterData = e);
    console.log(this.empRegisterData);
  }

  getAllEmployees(){
    this.service.getAllEmployees().subscribe(data => this.employees = data);
    console.log(this.employees);
  }

  deleteRecord(id){
    this.service.deleteEmployee(id).subscribe( );
    console.log(id);
  }

  getEmpData(id){
    this.service.getEmpData(id).subscribe(data => this.empUpdateData = data);
    console.log(this.empRegisterData);
  }
}
