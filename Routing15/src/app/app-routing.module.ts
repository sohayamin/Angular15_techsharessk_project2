import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: '/login', pathMatch: 'full'
  // },
  {
    path: 'login', component: LoginComponent //loadChildren: ()=>import('./login/login.module').then(component=> component.LoginModule)
  },
  // {
  //   path: 'register', component: RegisterComponent
  // },
  // {
  //   path: 'dashboard', component: DashboardComponent
  // },
  // {
  //   path: '**', component: NotfoundComponent
  // }

  //  {
  //   path: '', redirectTo: '/products', pathMatch: 'full'
  // },
  // {
  //   path: 'products', loadChildren: ()=>import('./products/products.module').then(m=> m.ProductsModule)
  // },

  {
    path: 'sender', component: SenderComponent
  },
  {
    path: 'reciever', component: RecieverComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
