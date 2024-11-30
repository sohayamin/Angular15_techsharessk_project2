import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router: Router) {

  }

  products = [
    {
      id: 1,
      name: 'Milk'
    },
    {
      id: 2,
      name: 'Chocolates'
    },
    {
      id: 3,
      name: 'Curd'
    }
  ]

  navigateToProductById(id: number) {
      this.router.navigate(['products',id])
  }

}
