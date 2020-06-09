import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    await this.authService.loginWithEmail(this.form.email, this.form.password);
    this.router.navigate(['/customers']);
  }
}
