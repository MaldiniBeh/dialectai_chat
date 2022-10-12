import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from './peice/pipe.module';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PipesModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
