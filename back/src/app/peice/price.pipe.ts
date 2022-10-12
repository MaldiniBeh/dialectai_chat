import { Product } from './../products/product.interface';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'productprice'
})
export class PricePipe implements PipeTransform {

  transform(price: Product): any {
    return `${price.price} ${price.currency}`;
  }

}
