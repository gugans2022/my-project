import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { DhoniComponent } from './dhoni/dhoni.component';
import { GuganComponent } from './gugan/gugan.component';
import { HomeComponent } from './home/home.component';
import { JadejaComponent } from './jadeja/jadeja.component';
import { ViratComponent } from './virat/virat.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'appoinment',component:AppoinmentComponent},
  {path:'gugan',component:GuganComponent},
  {path:'dhoni',component:DhoniComponent},
  {path:'virat',component:ViratComponent},
  {path:'jadeja',component:JadejaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
