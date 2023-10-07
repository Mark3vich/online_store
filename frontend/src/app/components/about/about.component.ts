import { Component, Input } from '@angular/core';
import { Products } from 'src/app/shared/models/products';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() product?: string;
  products: Products[] = [];
  constructor(private searchService: SearchService) {}

  sendProductData(product: string | undefined) {
    this.searchService.getProduct(product).subscribe((result: Products[]) => (this.products = result));    
  }
}
