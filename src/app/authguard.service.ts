import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpService } from './http.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  static loggedin: boolean = false;
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (!AuthGuardService.loggedin) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
