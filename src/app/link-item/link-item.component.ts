import {Component, Input, OnInit} from '@angular/core';
import { LinkItem } from '../models/linkItem';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent implements OnInit {
  @Input() item: LinkItem;

  constructor() { }

  ngOnInit(): void {
  }

}
