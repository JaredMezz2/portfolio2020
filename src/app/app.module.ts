import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNameComponent } from './main-name/main-name.component';
import { PortfolioTabComponent } from './portfolio-tab/portfolio-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNameComponent,
    PortfolioTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
