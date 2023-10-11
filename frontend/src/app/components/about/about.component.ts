import { Component, Input } from '@angular/core';
import { Products } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() product: string = "";
  public products: Products[] = [];

  public condition: boolean = false;
  public enablingTheContainer: boolean = false;

  constructor(private searchService: SearchService, private productsService: ProductsService) {}

  ngOnInit(): void { 
    this.productsService.getProduct().subscribe((result: Products[]) => (this.products = result));
  }

  changeTheButtonState() : void {
    this.enablingTheContainer = true;
    this.condition = true;
    setTimeout(() =>
      this.condition = false
    ,1500);
  }

  sendProductData(product: string) {
    this.searchService.getProduct(product).subscribe((result: Products[]) => (this.products = result));  

    // визуальные эффекты
    this.changeTheButtonState();
  }
}
