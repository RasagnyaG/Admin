import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './authguard.service';
import { CouponsComponent } from './coupons/coupons.component';
import { CreatecouponComponent } from './createcoupon/createcoupon.component';
import { CreateplanComponent } from './createplan/createplan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [
  {
    path: 'coupons',
    component: CouponsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'createcoupon',
    component: CreatecouponComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'plans', component: PlansComponent, canActivate: [AuthGuardService] },
  {
    path: 'createplan',
    component: CreateplanComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
