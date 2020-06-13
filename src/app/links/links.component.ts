import { Component, OnInit } from '@angular/core';
import { LinkItem } from '../models/linkItem';
import { LinkItemService } from '../services/link-item.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  items: LinkItem[];
  constructor(private linkItemService: LinkItemService) { }

  ngOnInit(): void {
    this.items = this.linkItemService.getLinks();
    console.log(this.items);
  }

}
