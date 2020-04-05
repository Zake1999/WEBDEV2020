import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
{ path: 'login', component: LogInComponent },
{ path: 'register', component: SignUpComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'product-detail/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LogInComponent,SignUpComponent,ProductDetailComponent,ProductListComponent]
