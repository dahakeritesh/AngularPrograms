import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styles: []
})
export class ContactUsComponent {

  orders = [
    {
      orderId: 1,
      customerName: 'Alex',
      amount: 2500,
      status: 0
    },
    {
      orderId: 2,
      customerName: 'John',
      amount: 4500,
      status: 1
    },
    {
      orderId: 3,
      customerName: 'Martin',
      amount: 5500,
      status: 2
    },
    {
      orderId: 4,
      customerName: 'Tomar',
      amount: 8500,
      status: 3
    },
  ];

}
