import { Component, inject } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent {
  recieversMsg: string = '';
  introMsg = inject(IntroService);

  constructor() {
    this.recieversMsg = this.introMsg.getMessage();
  }

}
