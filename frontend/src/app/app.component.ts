import { Component } from '@angular/core';
import { Products } from './shared/models/products';
import { ProductsService } from './shared/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  products: Products[] = [];

  constructor(private productsService: ProductsService) {};

  ngOnInit(): void { 
    this.productsService.getProduct().subscribe((result: Products[]) => (this.products = result));
  }
}
