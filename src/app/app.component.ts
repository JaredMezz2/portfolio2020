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
  ngOnInit(): void {
    ($ => {
      $(document).ready(() => {
        // const portfolioTab = $('#portfolioTab');
        $('#portfolioTab').click($ => {
          this.portfolioOpen = !this.portfolioOpen;
          hideSideElements();
        });

        $('#linkTab').click($ => {
          console.log("here");
          this.linksOpen = !this.linksOpen;
          jQuery('.slideDown').slideToggle();   // $ not working here, something to do with not
                                                // explicitly declaring $ as the import
        });
        console.log('JQUERY SAYS hi from app');
      });
    })(jQuery);

    function hideSideElements(){
      console.log('hiding side elements');
    }
  }
}

