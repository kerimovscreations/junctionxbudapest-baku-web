import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSubscriptionComponent } from './content/subscription/dashboard-subscription.component';
import { DashboardStatisticsComponent } from './content/statistics/dashboard-statistics.component';
import { DashboardAdsComponent } from './content/ads/dashboard-ads.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
        children: [
            { path: "", redirectTo: "subscription", pathMatch: "full" },
            { path: "subscription", component: DashboardSubscriptionComponent },
            { path: "statistics", component: DashboardStatisticsComponent },
            { path: "ads", component: DashboardAdsComponent },
            { path: '**', redirectTo: 'subscription', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }