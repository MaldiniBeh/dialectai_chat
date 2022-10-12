import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.interface';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private url = './assets/products.json';
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.url)
      .pipe(tap((data: Product[]) => console.log('All: ', data)));
  }
  createProduct(product: Product) {
    return product;
  }
}
