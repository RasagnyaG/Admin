import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
})
export class PlansComponent implements OnInit {
  plans: any;
  err: any;
  constructor(private api: HttpService) {}

  public ngOnInit(): void {
    this.api.getCoupons().subscribe((data: any) => {
      if (data.success) {
        this.plans = data.message;
      } else {
        this.err = data.message;
      }
    });
  }
}
