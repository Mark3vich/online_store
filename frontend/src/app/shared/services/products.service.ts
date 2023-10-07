import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environments } from 'src/app/environments/environments';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = "MobilePhones";
  constructor(private http: HttpClient) { }

  public getProduct(): Observable<Products[]> { 
    return this.http.get<Products[]>(`${environments.apiUrl}/${this.url}`);
  }

  // Методы будут использоваться в дальнейшей разработке проекта
  public updateProduct(product: Products): Observable<Products[]> {
    return this.http.put<Products[]>(
      `${environments.apiUrl}/${this.url}`,
      product
    );
  }

  public createProduct(product: Products): Observable<Products[]> {
    return this.http.post<Products[]>(
      `${environments.apiUrl}/${this.url}`,
      product
    );
  }

  public deleteProduct(product: Products): Observable<Products[]> {
    return this.http.delete<Products[]>(
      `${environments.apiUrl}/${this.url}/${product.Id}`
    );
  }
}
