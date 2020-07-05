import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent {

  title = 'first-app';

  mobParts = [
    {
      id: 1001,
      name: 'Mob Screen 4.8',
      prodColor: 'aqua',
      stock: 0,
      isOnline: false,
      country: 'India',
      price: 8000
    },
    {
      id: 1002,
      name: 'Mob Screen 5.5',
      prodColor: 'gold',
      stock: 5,
      isOnline: true,
      country: 'Australia',
      price: 12000
    },
      {
        id: 1003,
        name: 'Mob Screen 6.0',
        prodColor: 'green',
        stock: 8,
        isOnline: true,
        country: '',
        price: 18000
      }
    ];
}
