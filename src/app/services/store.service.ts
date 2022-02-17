import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

 private myShoppingCart: Product[] = [];

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
   return this.myShoppingCart.reduce((sum,item)=>sum=item.price,0);//usamos el metodo reduce para sacar el total de los precios de los elementos agregados
  }
}
