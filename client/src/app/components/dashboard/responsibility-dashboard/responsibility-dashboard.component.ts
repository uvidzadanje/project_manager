import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Responsibility } from 'src/app/models/responsibility';
import { selectAuthInfo } from 'src/app/state/auth/auth.selector';
import { getResponsibilityByEmployee } from 'src/app/state/responsibility/responsibility.action';
import { selectResponsibilities } from 'src/app/state/responsibility/responsibility.selector';

@Component({
  selector: 'responsibility-dashboard',
  templateUrl: './responsibility-dashboard.component.html',
  styleUrls: ['./responsibility-dashboard.component.css']
})
export class ResponsibilityDashboardComponent implements OnInit {

  responsibilities$: Observable<Responsibility[]> = of([]);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectAuthInfo).pipe(take(1)).subscribe(data => this.store.dispatch(getResponsibilityByEmployee({id: data.employee?.id!, token: data.accessToken})));
    this.responsibilities$ = this.store.select(selectResponsibilities);
  }

}
