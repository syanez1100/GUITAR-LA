import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  guitar = {
    name: 'LUKATHER',
    url: '../assets/img/guitarra_01.jpg',
    price: 1499000,
    description: 'Una guitarra de alta calidad con un diseño ergonómico, ideal para guitarristas experimentados que buscan un sonido versátil y potente.',
  };

}
