import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css'],
})
export class CreateplanComponent {
  constructor(
    private location: Location,
    private api: HttpService,
    private router: Router
  ) {}
  submitted = false;
  plan_name: any;
  plan_id: any;
  description: any;
  trial: any;
  trial_type = 'Days';
  user_num: any;
  setup_fee: any;
  overage: any;
  billing_every: any;
  billing_type = 'Months';
  price: any;
  err: any;

  back = () => {
    this.location.back();
  };
  create = () => {
    this.submitted = true;
    this.api
      .createPlan({
        name: this.plan_name,
        code: this.plan_id,
        description: this.description,
        setupfee: this.setup_fee,
        price: this.price,
        trial: this.trial,
        trialtype: this.trial_type,
        users: this.user_num,
        overage: this.overage,
        billing: this.billing_every,
        billingtype: this.billing_type,
      })
      .subscribe((data: any) => {
        if (data.success) {
          this.router.navigate(['/plans']);
        } else {
          this.err = data.message;
        }
      });
  };
}
