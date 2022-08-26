import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { skip, take } from "rxjs";
import { AppState } from "../app.state";
import { selectAuthInfo } from "../state/auth/auth.selector";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.select(selectAuthInfo).pipe(skip(1)).subscribe(data => {
      if(!data.isLoggedIn) {
        this.router.navigate(["/login"]);
      }
    })

    return true;
  }


}
