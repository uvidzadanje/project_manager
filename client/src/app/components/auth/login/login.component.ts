import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LoginPayloadDto } from 'src/app/dto/auth/login-payload.dto';
import { login } from 'src/app/state/auth/auth.action';
import { Observable, of } from 'rxjs';
import { selectAuthError, selectAuthInfo } from 'src/app/state/auth/auth.selector';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPayload: LoginPayloadDto = {
    username: "",
    password: ""
  }

  error$: Observable<string> = of("");
  authInfo$: Observable<{
    accessToken: string,
    isLoggedIn: boolean,
    employee: Employee | null
  }> = of({
    accessToken: "",
    isLoggedIn: false,
    employee: null
  });

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.error$ = this.store.select(selectAuthError);
    this.authInfo$ = this.store.select(selectAuthInfo);
    this.authInfo$.subscribe((data) => {
      if(data.isLoggedIn) this.router.navigate(["/dashboard"]);
    });

  }

  login()
  {
    this.store.dispatch(login({ payload: {...this.loginPayload} }));
  }

}
