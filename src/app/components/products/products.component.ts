import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.models';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products : Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
    ) {//inyeccion de dependencias
      this.myShoppingCart = this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

  onAddToShoppingCart(product: Product){
    console.log(product);
    //this.myShoppingCart.push(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
