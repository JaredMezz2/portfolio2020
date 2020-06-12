import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import PortfolioItems from '../../assets/portfolioItems.json';
import { portfolioItem } from '../models/portfolioItem';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioItemService {
  itemsURL: 'https://jsonplaceholder.typicode.com/items';

  constructor(private http: HttpClient) { }

  getItems() {
    return PortfolioItems;
  }
}
