import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http :  HttpClient){};

  shippingPath = '/assets/shipping.json';

  items : Product[] = [];

  addToCart(product : Product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }

  clearItems(){
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<Shipping[]>(this.shippingPath);
  }
}
