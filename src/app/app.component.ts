import {Component, OnInit} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    let portfolioClosed = true;
    let linksClosed = true;
    ($ => {
      $(document).ready(() => {
        // const portfolioTab = $('#portfolioTab');
        $('#portfolioTab').click($ => {
          portfolioClosed = !portfolioClosed;
          hideSideElements();
        });

        $('#linkTab').click(function(){
          $('.slideDown').slideToggle();
        })
        console.log('JQUERY SAYS hi from app');
      });
    })(jQuery);

    function hideSideElements(){
      console.log('hiding side elements');
    }
  }
}

