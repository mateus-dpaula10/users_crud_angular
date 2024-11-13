import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: string

  constructor(private rota: Router) {}

  logar() {
    if (this.userName !== '') {
      sessionStorage.setItem('user', this.userName)
      this.rota.navigate(['/home'])
    }
  }
}
