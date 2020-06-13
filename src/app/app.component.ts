import {Component, OnInit} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  linksOpen = false;
  portfolioOpen = false;
  sidesHidden = false;
  ngOnInit(): void {
    ($ => {
      $(document).ready(() => {
        // const portfolioTab = $('#portfolioTab');
        $('#portfolioTab').click($ => {
          this.portfolioOpen = !this.portfolioOpen;
          hideSideElements(this);
        });

        $('#linkTab').click($ => {
          console.log('here');
          this.linksOpen = !this.linksOpen;
          jQuery('.slideDown').slideToggle();
          hideSideElements(this);
        });
        console.log('JQUERY SAYS hi from app');
      });
    })(jQuery);

    function hideSideElements(app){
      app.sidesHidden = !app.sidesHidden;
      console.log('hiding side elements');
    }
  }
}

