import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNameComponent } from './main-name/main-name.component';
import { PortfolioTabComponent } from './portfolio-tab/portfolio-tab.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LinkTabComponent } from './link-tab/link-tab.component';
import { ContactTabComponent } from './contact-tab/contact-tab.component';
import { ResumeTabComponent } from './resume-tab/resume-tab.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MainNameComponent,
    PortfolioTabComponent,
    PortfolioComponent,
    LinkTabComponent,
    ContactTabComponent,
    ResumeTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
