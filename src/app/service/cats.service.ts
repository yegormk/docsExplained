import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs';

import { CatImage } from '../store/cats.state';


@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private urlApi = 'https://api.thecatapi.com/v1'

  constructor(private http: HttpClient) {}

  getBreed(breed: string, quantity: string): Observable<CatImage[]> {
    const params = new HttpParams()
    .set('limit', quantity)
    .set('breed_ids', breed)
  
    return (breed !== 'all') ?
      this.http.get<CatImage[]>
        (`${this.urlApi}/images/search?breed_ids=${breed}&limit=${quantity}`) :
      this.http.get<CatImage[]>
        (`${this.urlApi}/images/search?limit=${quantity}`);
  }

  getBreeds(): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(`${this.urlApi}/breeds`);
  }
  
}
