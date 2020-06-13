import { Injectable } from '@angular/core';
import PortfolioItems from '../../assets/portfolioItems.json';

@Injectable({
  providedIn: 'root'
})
export class PortfolioItemService {

  constructor() { }

  getItems() {
    return PortfolioItems;
  }
}
