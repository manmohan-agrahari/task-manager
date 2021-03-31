import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import {DashboardService} from'../dashboard.service';



@NgModule({
  declarations: [DashboardComponent,MyProfileComponent,AboutComponent,HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,MyProfileComponent,AboutComponent,HeaderComponent
  ],
  providers:[DashboardService]
})
export class AdminModule { }
