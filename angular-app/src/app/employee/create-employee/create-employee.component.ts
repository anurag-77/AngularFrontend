import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Employee } from "../../models/employee";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // employee : Employee;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

}
