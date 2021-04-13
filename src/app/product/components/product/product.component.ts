import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product
  @Output() productCliked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addCart() {
    console.log('añadir al carrito');
    this.productCliked.emit(this.product.id);

  }

}
