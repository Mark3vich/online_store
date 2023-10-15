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
  @Input() fromWhatPrice!: number;
  @Input() upToWhatPrice!: number;

  public products: Products[] = [];
  public filteredListOfProducts: Products[] = [];

  public condition: boolean = false;
  public enablingTheContainer: boolean = false;
  public isFlag: boolean = true;

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

  isThePriceSuitable(fromWhatPrice: number, upToWhatPrice: number, price: number): boolean {
    return (price >= fromWhatPrice && price <= upToWhatPrice) ? true : false;
  }

  sortDataInAscendingOrder(array: Products[]) {
    for(let i = 0; i < array.length; i++) {
      let current: number = array[i].price;  
      let j: number = i - 1; 
      while ((j > -1) && (current < array[j].price)) { 
        array[j+1].price = array[j].price; 
        j--; 
      } 
      array[j+1].price = current; 
    }
    return array;
  }

  priceFiltering(): void {
    this.changeTheButtonState();

    let _filteredListOfProducts: Products[] = [];

    this.products.map(p => 
      this.isThePriceSuitable(this.fromWhatPrice, this.upToWhatPrice, p.price) ? _filteredListOfProducts.push(p) : null
    );

    this.filteredListOfProducts = this.sortDataInAscendingOrder(_filteredListOfProducts);

    this.isFlag = false;
  }
}
