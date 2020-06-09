import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.afa.authState.pipe(
      map((user) => {
        if (state.url === '/') {
          if (user) {
            console.log('tried login in / navigating to /customers');
            return this.router.parseUrl('/customers');
          } else {
            console.log('tried / login is ok');
            return true;
          }
        }

        if (user) {
          console.log('user is logged ok');
          return true;
        }

        console.log('user is not allowed');
        return this.router.parseUrl('/');
      }),
      take(1)
    );
  }

  constructor(private router: Router, private afa: AngularFireAuth) {}
}
