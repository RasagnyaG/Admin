import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcoupon',
  templateUrl: './createcoupon.component.html',
  styleUrls: ['./createcoupon.component.css'],
})
export class CreatecouponComponent {
  constructor(
    private location: Location,
    private api: HttpService,
    private router: Router
  ) {}
  redemption: any;
  c_name: any;
  c_code: any;
  desc: any;
  disc: any;
  dur: any;
  times: any;
  reds: any;
  err: any;
  plan = 'free';
  submitted = false;
  type = 'percentage';
  starttime: any;
  endtime: any;
  back = () => {
    this.location.back();
  };

  create = () => {
    this.submitted = true;
    if (this.redemption == 'total') {
      this.reds = this.times + ' times';
    } else if ((this.redemption = 'date')) {
      this.reds = this.starttime + ' to ' + this.endtime;
    }
    this.api
      .createCoupon({
        name: this.c_name,
        code: this.c_code,
        description: this.desc,
        terms: this.disc,
        redemptions: this.reds,
        expiry: this.dur,
        type: this.type,
      })
      .subscribe((data: any) => {
        if (data.success) {
          this.router.navigate(['/coupons']);
        } else {
          this.err = data.message;
        }
      });
  };
}
