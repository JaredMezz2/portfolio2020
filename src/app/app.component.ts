import {Component, OnInit} from '@angular/core';
declare var jQuery: any;
// declare var $el: JQuery;  // This is missing in your code, you have to declare $ as variable.

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
        // on portfolio tab click
        $('#portfolioTab').click($ => {
          this.portfolioOpen = !this.portfolioOpen;
          hideSideElements(this);
        });

        // on link tab click
        $('#linkTab').click($ => {
          this.linksOpen = !this.linksOpen;
          console.log(this.linksOpen);
          if (this.linksOpen) {
            // TODO: no longer a jquery issue, but not applying to what I want it to. Doesnt seem to be applying anywhere
            console.log(jQuery('#linkTab'));
            jQuery('#linkTab').attr('routerLink', '/');
          } else {
            jQuery('#linkButton').attr('routerLink', '/links');
          }
          jQuery('.slideDown').slideToggle();
          hideSideElements(this);
        });
        console.log('JQUERY SAYS hi from app');
      });
    })(jQuery);

    function hideSideElements(app){
      app.sidesHidden = !app.sidesHidden;
      console.log('toggling side elements');
    }
  }
}

