import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-createcoupon',
  templateUrl: './createcoupon.component.html',
  styleUrls: ['./createcoupon.component.css'],
})
export class CreatecouponComponent {
  constructor(private location: Location) {}
  redemption: any;
  back = () => {
    this.location.back();
  };
}
