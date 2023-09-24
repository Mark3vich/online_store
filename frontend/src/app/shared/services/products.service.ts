import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Products } from '../models/products';
import { environments } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = "Product";
  constructor(private http: HttpClient) { }

  public getProduct(): Observable<Products[]> { 
    return this.http.get<Products[]>(`${environments.apiUrl}/${this.url}`);
  }
}
