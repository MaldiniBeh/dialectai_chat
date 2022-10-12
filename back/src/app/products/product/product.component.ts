import { ProductService } from './../products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;
  products: Product[] = []
  constructor(private serviceProduct: ProductService) { }

  ngOnInit() { }
}
