import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    city: new FormControl(''),
    department: new FormControl(''),
    gender: new FormControl(''),
    hireDate: new FormControl(''),
    isPermanent:new FormControl('')


  })
}
