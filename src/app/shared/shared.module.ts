import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderHeroComponent } from './header-hero/header-hero.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderHeroComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HeaderHeroComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
