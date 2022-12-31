import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:1600';

  logIn = (body: any) => {
    return this.http.post(this.url + '/admin/login', body);
  };

  createCoupon = (body: any) => {
    return this.http.post(this.url + '/coupons/create', body);
  };

  getCoupons = () => {
    return this.http.get(this.url + '/coupons/list');
  };

  createPlan = (body: any) => {
    return this.http.post(this.url + '/plans/create', body);
  };

  getPlans = () => {
    return this.http.get(this.url + '/plans/list');
  };
}
