import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoxingComponent} from './boxing/boxing.component';
import {MMAComponent} from './mma/MMA.component';
import {CategoryProductsComponent} from './category-products/category-products.component';
import {DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
{ path: 'boxing-sport', component:BoxingComponent},
{ path: 'mma-sport', component: MMAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BoxingComponent, MMAComponent]
