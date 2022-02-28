import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product, ProductDTO } from '../models/product.models';
import { reverse } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string ='https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>('https://young-sands-07814.herokuapp.com/api/products');
  }

  postProducto(data : ProductDTO){
    return this.http.post<Product>(this.url, data);
  }

  deleteProduct(id:string){
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }
}
