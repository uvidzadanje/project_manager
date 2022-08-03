import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LoginPayloadDto } from 'src/app/dto/auth/login-payload.dto';
import { login } from 'src/app/state/auth/auth.action';
import { Observable, of } from 'rxjs';
import { selectAuthError } from 'src/app/state/auth/auth.selector';

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

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.error$ = this.store.select(selectAuthError);
  }

  login()
  {
    this.store.dispatch(login({ payload: {...this.loginPayload} }));
  }

}
