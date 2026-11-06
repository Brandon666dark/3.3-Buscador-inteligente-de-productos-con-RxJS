import { Component } from '@angular/core';
import { ProductSearchComponent } from './product-search/product-search.component';

@Component({
  selector: 'app-root',
  imports: [ProductSearchComponent],
  template: '<app-product-search />',
})
export class App {}
