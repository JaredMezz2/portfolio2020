import { Component, OnInit } from '@angular/core';
import {portfolioItem} from '../models/portfolioItem';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: portfolioItem[];
  constructor() { }

  ngOnInit(): void {
    // create an instance of portfolioItem in modules with this test data
    this.items = [
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
        title: 'Test Title',
        description: 'test Description about this portfolio item',
        techUsed: [
          'HTML',
          'CSS',
          'Javascript'
        ]
      },
      {
        image: 'https://postmediatorontosun.files.wordpress.com/2019/07/gettyimages-910314172-e1564420108411.jpg',
        title: 'Test Title 2',
        description: 'test Description about this  second portfolio item',
        techUsed: [
          'HTML',
          'CSS',
          'Javascript'
        ]
      }
    ];


  }

}
