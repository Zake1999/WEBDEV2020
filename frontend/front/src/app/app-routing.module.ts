import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent} from './log-out/log-out.component';
const routes: Routes = [
{ path: 'login', component: LogInComponent },
{ path: 'register', component: LogOutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LogInComponent,LogOutComponent]
