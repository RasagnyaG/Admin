import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AuthGuardService } from '../authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private api: HttpService, private router: Router) {}

  email_id = '';
  pass = '';
  submitted = false;
  err = '';
  login = () => {
    this.submitted = true;
    if (this.email_id !== '' && this.pass !== '') {
      this.api
        .logIn({ email: this.email_id, password: this.pass })
        .subscribe((data: any) => {
          if (data.success) {
            localStorage.setItem('Authorization', `Bearer ${data.token}`);
            AuthGuardService.loggedin = true;
            this.router.navigate(['/plans']);
          } else {
            this.err = data.message;
          }
        });
    }
  };
}
