import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msg = inject(IntroService)

}
