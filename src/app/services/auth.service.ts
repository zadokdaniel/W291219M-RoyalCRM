import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User> = null;
  user: firebase.User = null;
  isLogged: boolean = false;

  constructor(private afa: AngularFireAuth) {
    this.user$ = this.afa.authState.pipe(
      tap((user) => (this.user = user)),
      tap((user) => (this.isLogged = Boolean(user))),
      shareReplay(1)
    );
  }

  createUser(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  loginWithEmail(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    return this.afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afa.signOut();
  }
}
