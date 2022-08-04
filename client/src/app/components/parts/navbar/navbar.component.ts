import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Employee } from 'src/app/models/employee';
import { logout } from 'src/app/state/auth/auth.action';
import { selectAuthInfo } from 'src/app/state/auth/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.authInfo$ = this.store.select(selectAuthInfo);
  }

  logout()
  {
    this.store.dispatch(logout());
  }

}
