import { Component, OnInit } from '@angular/core';
import {portfolioItem} from '../models/portfolioItem';
import { PortfolioItemService } from '../services/portfolio-item.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // store all portfolio items in an array
  items: portfolioItem[];
  // initialize services here
  constructor(private portfolioItemService: PortfolioItemService) { }

  ngOnInit(): void {
    // on initialization append all items from portfolio item service to local array
    this.items = this.portfolioItemService.getItems();
  }

}
