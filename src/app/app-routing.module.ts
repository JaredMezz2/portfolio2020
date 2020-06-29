import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNameComponent } from './main-name/main-name.component';
import { LinksComponent } from './links/links.component';


const routes: Routes = [
  { path: 'links', component: LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
