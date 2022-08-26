import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { CreateEmployeeDto } from 'src/app/dto/employee/employee.dto';
import { EmployeeType } from 'src/app/models/employee-type';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeTypeService } from 'src/app/services/employee-type.service';
import { loadEmployeeTypes } from 'src/app/state/employee-type/employee-type.action';
import { selectEmployeeTypes } from 'src/app/state/employee-type/employee-type.selector';

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
    private store: Store<AppState>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadEmployeeTypes());
    this.employeeTypes =  this.store.select(selectEmployeeTypes);
  }

  register()
  {
    this.authService.register(this.createEmployeePayload).subscribe({
      error: (response) => alert(response.error.message.join("\n"))
    });
  }

}
