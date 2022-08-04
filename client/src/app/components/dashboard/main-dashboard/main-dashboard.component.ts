import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Employee } from 'src/app/models/employee';
import { getAuthInfo } from 'src/app/state/auth/auth.action';
import { selectAuthInfo } from 'src/app/state/auth/auth.selector';

@Component({
  selector: 'main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

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

    const token = localStorage.getItem("token");
    if(token) this.store.dispatch(getAuthInfo({ accessToken: token}));

    this.authInfo$ = this.store.select(selectAuthInfo);
    this.authInfo$.subscribe((data)=> {
      if(!data.isLoggedIn) this.router.navigate(["/login"]);
    })
  }

}
