import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { environments } from 'src/app/environments/environments';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url: string = "Search";
  constructor(private http: HttpClient) { }
  public getProduct(param: string): Observable<Products[]> { 
    for(let i = 0; i < param.length; i++) {
      if(param[i] === "#") {
        param = param.replace("#", "%23");
      }
      if(param[i] === ' ') {
        param = param.replace(' ', "%20");
      }
    }
    return this.http.get<Products[]>(`${environments.apiUrl}/${this.url}?searchString=${param}`);
  }
}
