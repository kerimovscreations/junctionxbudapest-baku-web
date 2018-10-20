import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { DashboardSubscriptionComponent } from './content/subscription/dashboard-subscription.component'
import { DashboardStatisticsComponent } from './content/statistics/dashboard-statistics.component'
import { DashboardAdsComponent } from './content/ads/dashboard-ads.component'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { DashboardRoutingModule } from './dashboard.routing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSubscriptionComponent,
    DashboardStatisticsComponent,
    DashboardAdsComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [
    DashboardComponent,
    DashboardSubscriptionComponent,
    DashboardStatisticsComponent,
    DashboardAdsComponent
  ]
})
export class DashboardModule { }