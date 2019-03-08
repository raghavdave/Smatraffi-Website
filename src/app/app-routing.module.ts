import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TrafficInfoComponent } from "./traffic-info/traffic-info.component";
import { StatsComponent } from "./stats/stats.component";
import { ReportsComponent } from "./reports/reports.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    // path: 'dashboard/:id',       Use this after implementing RouteGuard
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'trafficInfo',
    component: TrafficInfoComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
