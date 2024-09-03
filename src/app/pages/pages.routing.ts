import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { EntradaComponent } from './blog/entrada/entrada.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        title: 'Nosotros',
        component: AboutComponent
      },
      {
        path: 'blog',
        title: 'Blog',
        component: BlogComponent
      },
      {
        path: 'blog/:id',
        component: EntradaComponent
      },
      {
        path: 'shop',
        title: 'Shop',
        component: ShopComponent
      },
      {
        path: '', redirectTo: '/', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
