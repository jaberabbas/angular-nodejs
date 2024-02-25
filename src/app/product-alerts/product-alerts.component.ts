import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.scss'
})
export class ProductAlertsComponent {
  constructor(private cartService : CartService){};

  @Input() product: Product | undefined;
  @Output() notify: EventEmitter<any> = new EventEmitter();
}
