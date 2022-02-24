import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

 @Input('myProduct') product : Product ={
    id: '',
    title:'',
    images: [],
    price: 0,
    description: '',
    category:{
      id:'',
      name:''
    }
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    console.log('producto emitido....',this.product);
    this.addedProduct.emit(this.product);
  }

}
