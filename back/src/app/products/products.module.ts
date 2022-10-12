import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PipesModule } from '../peice/pipe.module';



@NgModule({
  imports: [
    ReactiveFormsModule,
    PipesModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'product-list', component: ProductListComponent },
    ]),
  ],
  declarations: [ProductListComponent, ProductComponent],
})
export class ProductsModule { }
