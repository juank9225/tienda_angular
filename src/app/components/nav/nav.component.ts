import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service'; //importamos el servicio que tiene el almacen
import { Product } from '../../models/product.models';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter:number =0;

  constructor(
    private storeService : StoreService//lo inyectamos
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(Products =>{
      this.counter = Products.length;
    });//nos suscribimos al almacen de estados
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
