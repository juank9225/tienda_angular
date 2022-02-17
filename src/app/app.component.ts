import { Component } from '@angular/core';
import { Product } from './models/product.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

  onLoaded(img: String){
    console.log('Log Padre......',img);
  }
}
