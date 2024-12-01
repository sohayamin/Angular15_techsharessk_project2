import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NotfoundComponent,
    DashboardComponent,
    SenderComponent,
    RecieverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
