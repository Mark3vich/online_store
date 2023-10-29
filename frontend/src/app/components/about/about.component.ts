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
  public hashtags: Array<string | undefined> = [];

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

  sendProductData(product: string): void {
    this.searchService.getProduct(product).subscribe((result: Products[]) => (this.products = result));  

    // визуальные эффекты
    this.changeTheButtonState();


    setTimeout(() =>
      this.didTheDataLoad()
    ,1500);
  }

  isThePriceSuitable(fromWhatPrice: number, upToWhatPrice: number, price: number): boolean {
    return (price >= fromWhatPrice && price <= upToWhatPrice) ? true : false;
  }

  _sortDataInAscendingOrder(): void {
    this.products.sort(function(obj1, obj2) {
      return obj1.price-obj2.price;
    })
    this.filteredListOfProducts = this.products;
  }

  _sortDataInDescendingOrder(): void {
    this.products.sort(function(obj1, obj2) {
      return obj2.price-obj1.price;
    })
    this.filteredListOfProducts = this.products;
  }

  sortDataInAscendingOrder(array: Products[]): Products[] {
    array.sort(function(obj1, obj2) {
      return obj1.price-obj2.price;
    })
    return array;
  }

  sortFromAToZ(): void { 
    this.products.sort(function(obj1, obj2) {
      if (obj1.productName < obj2.productName) return -1;
      if (obj1.productName > obj2.productName) return 1;
      return 0;
    })
    this.filteredListOfProducts = this.products;
  }

  didTheDataLoad(): boolean {
    return true;
  }

  hasDuplicates(array: string) {
    return (new Set(array)).size !== array.length;
  }

  giveTheColorBy(product: string, hashtags: Array<string | undefined>): void {
    let count: number = 0;
    let hashtag: string = "";
    for(let i = 0; i < product.length; i++) {
      if(count === 1) { 
        hashtag += product[i];
      }
      if(product[i] === ',') {
        count++;
      } 
      if(count === 2) { 
        if(hashtags.length === 0 || this.hasDuplicates(hashtag.slice(0, -1))) {
          hashtags.push(hashtag.slice(0, -1))
        }
      }
    } 
  }

  getColors(): Array<string | undefined> {
    let hashtags: Array<string | undefined> = []
    this.products.map(p => this.giveTheColorBy(p.hashtags, hashtags));
    return hashtags;
  }

  sortByBudget(): void {

  }

  sortByPremium(): void {

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
