import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      });
  }

  createProduct() {
    const newProduct: Product = {
      id: '4',
      title: 'M1',
      image: 'assets/images/M1.png',
      price: 505.79,
      description: 'Ya llegó el primer chip diseñado específicamente para la Mac. El sistema en chip (SoC) M1 de Apple tiene 16,000 millones de transistores e integra CPU, GPU, Neural Engine, E/S y mucho más en un diminuto chip. Por eso, te brinda un rendimiento increíble, tecnologías exclusivas y una eficiencia energética líder en la industria.1 El chip M1 es más que un paso adelante: es la entrada al futuro de la Mac.',
      sentence: 'Un chip pequeño. Un avance enorme.'
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }
  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 555555,
      description: 'edicion titulo'
    };
    this.productsService.updateProduct('2', updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }


}