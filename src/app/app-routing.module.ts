import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch:'full'},
  {path: 'register', component:CreateRegistrationComponent},
  {path:'list', component:CreateRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
