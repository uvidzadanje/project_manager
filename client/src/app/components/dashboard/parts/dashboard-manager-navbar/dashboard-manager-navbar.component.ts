import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { EmployeeType } from 'src/app/models/employee-type';
import { selectAuthToken } from 'src/app/state/auth/auth.selector';

@Component({
  selector: 'dashboard-manager-navbar',
  templateUrl: './dashboard-manager-navbar.component.html',
  styleUrls: ['./dashboard-manager-navbar.component.css']
})
export class DashboardManagerNavbarComponent implements OnInit {

  @Input() authType: EmployeeType = {
    id: 0,
    name: '',
  }

  accessToken$: Observable<string> = of("");

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.accessToken$ = this.store.select(selectAuthToken);
  }

}
