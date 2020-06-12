import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNameComponent } from './main-name/main-name.component';
import { PortfolioTabComponent } from './portfolio-tab/portfolio-tab.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LinkTabComponent } from './link-tab/link-tab.component';
import { ContactTabComponent } from './contact-tab/contact-tab.component';
import { ResumeTabComponent } from './resume-tab/resume-tab.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNameComponent,
    PortfolioTabComponent,
    PortfolioComponent,
    LinkTabComponent,
    ContactTabComponent,
    ResumeTabComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
