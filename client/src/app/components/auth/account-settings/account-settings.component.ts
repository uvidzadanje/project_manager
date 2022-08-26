import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { UpdateEmployeeDto } from 'src/app/dto/employee/employee.dto';
import { Employee } from 'src/app/models/employee';
import { EmployeeType } from 'src/app/models/employee-type';
import { updateEmployeeInfo } from 'src/app/state/auth/auth.action';
import { selectEmployeeInfo } from 'src/app/state/auth/auth.selector';
import { loadEmployeeTypes } from 'src/app/state/employee-type/employee-type.action';
import { selectEmployeeTypes } from 'src/app/state/employee-type/employee-type.selector';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  authInfo$: Observable<{
    accessToken: string,
    isLoggedIn: boolean,
    employee: Employee | null
  }> = of({
    accessToken: "",
    isLoggedIn: false,
    employee: null
  });

  employeeTypes$: Observable<EmployeeType[]> = of([]);


  employeeInfo: Employee = {
    id: NaN,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    type: {
      id: 0,
      name: ""
    }
  }

  selectedEmployeeType = 0;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadEmployeeTypes());
    this.employeeTypes$ = this.store.select(selectEmployeeTypes);

    this.store.select(selectEmployeeInfo).subscribe(data => {
      this.employeeInfo = {...data};
      this.selectedEmployeeType = this.employeeInfo.type?.id!;
    });
  }

  update()
  {
    const {id, ...changes} = this.employeeInfo;
    if(!changes.password) delete changes["password"];
    const token = localStorage.getItem("token")!;

    this.store.dispatch(updateEmployeeInfo({ changes: {...changes as UpdateEmployeeDto, employee_type_id: this.selectedEmployeeType}, id, accessToken: token }))
  }

}
