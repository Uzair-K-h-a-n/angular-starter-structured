import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
  NavBarComponent,
  DashboardComponent],
  imports: [
  ],
  exports: [
  ]
})
export class AdminModule { }