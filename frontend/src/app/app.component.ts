import { Component } from '@angular/core';
import { ProductsService } from './shared/services/products.service';
import { Products } from './shared/models/products';

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
