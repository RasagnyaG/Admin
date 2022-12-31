import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css'],
})
export class CouponsComponent implements OnInit {
  coupons: any;
  err: any;
  constructor(private api: HttpService) {}

  public ngOnInit(): void {
    this.api.getCoupons().subscribe((data: any) => {
      if (data.success) {
        this.coupons = data.message;
      } else {
        this.err = data.message;
      }
    });
  }
}
