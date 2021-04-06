import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [

  {path:'dashboard', component:DashboardComponent },
  {path:'about', component:AboutComponent},
  {path:'project',component:ProjectComponent},
{path:'',component:LoginComponent,pathMatch:"full"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
