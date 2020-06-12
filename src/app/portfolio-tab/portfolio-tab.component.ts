import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-portfolio-tab',
  templateUrl: './portfolio-tab.component.html',
  styleUrls: ['./portfolio-tab.component.css']
})
export class PortfolioTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ($ => {
      $(document).ready(() => {
        console.log('JQUERY SAYS HELLO');
        $('#extendPortfolio').click($ => {
          console.log('clicked');
        });
      });
    })(jQuery);

  }

}
