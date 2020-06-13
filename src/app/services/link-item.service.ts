import { Injectable } from '@angular/core';
import LinkItems from '../../assets/linkItems.json';

@Injectable({
  providedIn: 'root'
})
export class LinkItemService {

  constructor() { }
  getLinks(){
    return LinkItems;
  }
}
