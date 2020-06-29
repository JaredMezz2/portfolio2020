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
        // on portfolio tab click
        $('#portfolioTab').click($ => {
          this.portfolioOpen = !this.portfolioOpen;
          hideSideElements(this);
        });

        // on link tab click
        $('#linkTab').click($ => {
          console.log('here');
          this.linksOpen = !this.linksOpen;
          console.log(this.linksOpen);
          // if (this.linksOpen) {
          //   $('#linkTab').attr('routerLink', '');
          // }
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

