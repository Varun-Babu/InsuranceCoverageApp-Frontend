import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'' , component:HomePageComponent},
  {path:'dashboard', component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
