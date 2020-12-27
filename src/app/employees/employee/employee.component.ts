import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  departments = [
    {id: 1, value: 'Sales'},
    {id: 2, value: 'Engineering'},
    {id: 3, value: 'Accounting'},
    {id: 4, value: 'Human Resources'},
    {id: 5, value: 'Management'}
  ];

  ngOnInit(): void {
  }

  
}
