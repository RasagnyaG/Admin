import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CreateplanComponent } from './createplan/createplan.component';
import { CreatecouponComponent } from './createcoupon/createcoupon.component';
import { HeaderComponent } from './header/header.component';
import { PlansComponent } from './plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CouponsComponent,
    CreateplanComponent,
    CreatecouponComponent,
    HeaderComponent,
    PlansComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
