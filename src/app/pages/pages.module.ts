import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    AboutComponent,
    BlogComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
