import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Employee } from "../../models/employee";


@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent implements OnInit {
  employees: Array<Employee> = [];

  selectedEmployee? : Employee;

  getEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  constructor(private http : HttpClient) {

   }

  ngOnInit(): void {
    this.http.get<Array<Employee>>('https://localhost:44325/api/employee/getallemployees').subscribe(Response => {

      this.employees = Response;


    })
  }

}
