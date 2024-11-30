import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  id:any;

  constructor(private activatedroute: ActivatedRoute, private router:Router) {
      this.id = this.activatedroute.snapshot.params['id'];
  }

  navigateByUrlByDetails() {
      this.router.navigate(['products',this.id,'details'])
  }

}
