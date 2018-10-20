import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { DashboardSubscriptionComponent } from './content/subscription/dashboard-subscription.component'
import { DashboardStatisticsComponent } from './content/statistics/dashboard-statistics.component'
import { DashboardAdsComponent } from './content/ads/dashboard-ads.component'
import { AdsDialog } from './content/ads/dashboard-ads.component'
import { SubscriptionDialog } from './content/subscription/dashboard-subscription.component'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { StatisticsDialog} from './content/statistics/dashboard-statistics.component';


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
    DashboardAdsComponent,
    AdsDialog,
    SubscriptionDialog,
    StatisticsDialog
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [
    DashboardComponent,
    DashboardSubscriptionComponent,
    DashboardStatisticsComponent,
    DashboardAdsComponent,
    AdsDialog,
    SubscriptionDialog,
    StatisticsDialog
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
