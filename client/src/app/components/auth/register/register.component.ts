import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateEmployeeDto } from 'src/app/dto/employee/employee.dto';
import { EmployeeType } from 'src/app/models/employee-type';
import { EmployeeTypeService } from 'src/app/services/employee-type.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employeeTypes: Observable<EmployeeType[]> = of([]);
  createEmployeePayload: CreateEmployeeDto = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    employee_type_id: 0
  };

  title = 'Register';
  constructor(
    private employeeTypeService: EmployeeTypeService
  ) { }

  ngOnInit(): void {
    this.employeeTypes =  this.employeeTypeService.getAll();
  }

  register()
  {

  }

}
