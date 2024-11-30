import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: '/login', pathMatch: 'full'
  // },
  // {
  //   path: 'login', loadChildren: ()=>import('./login/login.module').then(component=> component.LoginModule)
  // },
  // {
  //   path: 'register', component: RegisterComponent
  // },
  // {
  //   path: 'dashboard', component: DashboardComponent
  // },
  // {
  //   path: '**', component: NotfoundComponent
  // }

   {
    path: '', redirectTo: '/products', pathMatch: 'full'
  },
  {
    path: 'products', loadChildren: ()=>import('./products/products.module').then(m=> m.ProductsModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
