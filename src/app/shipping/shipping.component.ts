import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { Shipping } from '../shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) { };
  shippingCosts!: Observable<Shipping[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices()
  }

}
