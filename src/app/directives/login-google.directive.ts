import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appLoginGoogle]',
})
export class LoginGoogleDirective {
  @HostListener('click', ['$event']) clickEvent(e: MouseEvent) {
    e.preventDefault();
    this.authService.loginWithGoogle();
  }

  constructor(private authService: AuthService, private router: Router) {}
}
