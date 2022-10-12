import { ProductService } from './products/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from './products/product.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Freddy Behanzin';
  products: Product[] = []
  destroysubscribe!: Subscription
  constructor(private serviceProduct: ProductService) { }
  ngOnInit(): void {
    this.destroysubscribe = this.serviceProduct.getProducts().subscribe((product) => product)
  }
  ngOnDestroy(): void {
    if (this.destroysubscribe) this.destroysubscribe.unsubscribe()
  }
}
