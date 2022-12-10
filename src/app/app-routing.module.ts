import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { CreatecouponComponent } from './createcoupon/createcoupon.component';
import { CreateplanComponent } from './createplan/createplan.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [
  {path : 'coupons', component: CouponsComponent},
  {path : 'createcoupon', component : CreatecouponComponent},
  {path: 'plans', component : PlansComponent},
  {path : 'createplan', component : CreateplanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
