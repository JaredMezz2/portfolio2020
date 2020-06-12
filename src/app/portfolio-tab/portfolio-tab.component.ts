import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-portfolio-tab',
  templateUrl: './portfolio-tab.component.html',
  styleUrls: ['./portfolio-tab.component.css']
})
export class PortfolioTabComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    let status = false;
    ($ => {
      $(document).ready(() => {
        // console.log('JQUERY SAYS HELLO');
        const portfolioTab = $('#portfolioTab');
        $('#extendPortfolio').click($ => {
          // console.log(this);
          // portfolioTab.toggleClass('d-block');
          // hideElement(this);
          // (this).toggleClass('d-block');
        });
      });
    })(jQuery);

    function hideElement(elem){
      status = !status;
      console.log('test');
      console.log(elem);
    }
  }



}
