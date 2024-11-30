import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing15';
  userId = 1;

  constructor(private router:Router) {

  }

  login() {
    let sampleUserId = 2;
    if(this.userId==sampleUserId) {
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['dashboard'])
    }

  }
}
