import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from '../product.interface';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] | undefined;
  Productdata!: FormGroup;
  destroysub!: Subscription
  @ViewChild('modaldismiss') modaldismiss!: ElementRef;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.ongetProducts()
    this.resetForm()
  }
  ongetProducts() {
    this.destroysub = this.productService.getProducts().subscribe((data) => {
      this.products = [...data];
    });
  }
  resetForm() {
    const generateId = Math.floor(Math.random() * (new Date().getMilliseconds()));
    this.Productdata = new FormGroup({
      id: new FormControl(generateId),
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      currency: new FormControl(null, [Validators.required])

    }
    );
  }
  onCreateProduct() {
    const data = this.productService.createProduct(this.Productdata.value)
    this.products = [...this.products!, data]
    this.Productdata.reset()
    this.modaldismiss
      .nativeElement.click()

  }
  ngOnDestroy(): void {
    if (this.destroysub) this.destroysub.unsubscribe()
  }
}
