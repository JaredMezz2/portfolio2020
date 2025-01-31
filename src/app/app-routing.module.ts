import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNameComponent } from './main-name/main-name.component';
import { LinksComponent } from './links/links.component';
import {BlankComponent} from './blank/blank.component';


const routes: Routes = [
  { path: '', component: BlankComponent},
  { path: 'links', component: LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
