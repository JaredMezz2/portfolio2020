import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioItemService {

  constructor() { }

  getItems() {
    return [
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
