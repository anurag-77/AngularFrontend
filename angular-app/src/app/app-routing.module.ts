import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Component Imports
import { CreatePartnerComponent } from "./partner/create-partner/create-partner.component";
import { ViewPartnerComponent } from "./partner/view-partner/view-partner.component";
import { AppComponent } from "./app.component";

const  routes : Routes = [
  { path: 'create-partner', component: CreatePartnerComponent},
  { path: 'view-partners', component: ViewPartnerComponent},
  { path: 'update-partner/:Id', component: CreatePartnerComponent},
  // { path: '/', redirectTo: '/'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
