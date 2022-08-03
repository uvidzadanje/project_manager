import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateEmployeeDto } from 'src/app/dto/employee/employee.dto';
import { EmployeeType } from 'src/app/models/employee-type';
import { AuthService } from 'src/app/services/auth.service';
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
    employee_type_id: NaN
  };

  title = 'Register';
  constructor(
    private employeeTypeService: EmployeeTypeService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.employeeTypes =  this.employeeTypeService.getAll();
  }

  register()
  {
    this.authService.register(this.createEmployeePayload).subscribe({
      error: (response) => alert(response.error.message.join("\n"))
    });
  }

}
