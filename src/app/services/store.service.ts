import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';
import { BehaviorSubject } from 'rxjs';//libreria que implementa el patron observable
import { th } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

 private myShoppingCart: Product[] = [];
 private myCart = new BehaviorSubject<Product[]>([]); // creo la variable del almacen

 myCart$ = this.myCart.asObservable();//le doy a la variable la propiedad de ser observada

 constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);//trasmitimos el estado de la lista cada vez que se realice un cambio en ella
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
   return this.myShoppingCart.reduce((sum,item)=>sum=item.price,0);//usamos el metodo reduce para sacar el total de los precios de los elementos agregados
  }
}
