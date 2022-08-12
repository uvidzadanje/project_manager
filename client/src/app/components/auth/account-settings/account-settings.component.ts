import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { UpdateEmployeeDto } from 'src/app/dto/employee/employee.dto';
import { Employee } from 'src/app/models/employee';
import { getAuthInfo, updateEmployeeInfo } from 'src/app/state/auth/auth.action';
import { selectAuthInfo, selectEmployeeInfo } from 'src/app/state/auth/auth.selector';

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

  employeeInfo: Employee = {
    id: NaN,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  }

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authInfo$ = this.store.select(selectAuthInfo);
    this.authInfo$.subscribe(data => {
      if(!data.isLoggedIn) {

        const token = localStorage.getItem("token");
        if(token) this.store.dispatch(getAuthInfo({ accessToken: token }));

        this.router.navigate(["/login"]);
      }
      else this.store.select(selectEmployeeInfo).subscribe(data => this.employeeInfo = {...data});
    })
  }

  update()
  {
    const {id, ...changes} = this.employeeInfo;
    if(!changes.password) delete changes["password"];
    const token = localStorage.getItem("token")!;

    this.store.dispatch(updateEmployeeInfo({ changes: changes as UpdateEmployeeDto, id, accessToken: token }))
  }

}
