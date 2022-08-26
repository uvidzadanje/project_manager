import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { AppState } from './app.state';
import { getAuthInfo } from './state/auth/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(
    private router: Router,
    private store: Store<AppState>
  )
  {
    this.router.events.pipe(filter(event => event !instanceof NavigationEnd)).subscribe(event => {
      const token = localStorage.getItem("token");
      if(!token) return;

      this.store.dispatch(getAuthInfo({accessToken: token}))
    })
  }
}
