import { Component, OnInit } from '@angular/core';
import { Product, ProductDTO } from '../../models/product.models';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { Data } from '@angular/router';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products : Product[] = [];
  today = new Date();

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

  createNewProduct(){
    const product: ProductDTO = {
      title:'Nuevo Producto',
      images: [],
      price: 1000,
      description: 'bla bla bla...',
      categoryId: 2
    };

    this.productsService.postProducto(product).subscribe(data=>{
      console.log('Creacion: ',data);
      this.products.unshift(data);//insertar en la primera posicion del array el producto nuevo
    });
  }
}
