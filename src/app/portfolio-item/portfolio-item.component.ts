import { Component, OnInit, Input } from '@angular/core';
import {portfolioItem} from '../models/portfolioItem';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  // creating an input property for my portfolio item
  @Input() item: portfolioItem;

  constructor() { }

  ngOnInit(): void {
  }

}
