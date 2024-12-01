import { Component, inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { IntroService } from '../intro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  senderParam: string = '';

  introMsg = inject(IntroService);
  router = inject(Router)


  sendData() {
      this.introMsg.setMessage(this.senderParam);
      this.router.navigate(['reciever']);
  }

}
