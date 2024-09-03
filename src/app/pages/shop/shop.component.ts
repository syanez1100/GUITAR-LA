import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  guitars = [
    {
      name: 'LUKATHER',
      url: '../assets/img/guitarra_01.jpg',
      price: 1499000,
      description: 'Una guitarra de alta calidad con un diseño ergonómico, ideal para guitarristas experimentados que buscan un sonido versátil y potente.',
    },
    {
      name: 'SRV',
      url: '../assets/img/guitarra_02.jpg',
      price: 1499000,
      description: 'Inspirada en el legendario Stevie Ray Vaughan, esta guitarra ofrece un tono bluesero excepcional con una construcción robusta y cómoda.',
    },
    {
      name: 'BORLAND',
      url: '../assets/img/guitarra_03.jpg',
      price: 1209000,
      description: 'Con un diseño moderno y una excelente capacidad de respuesta, esta guitarra es perfecta para quienes buscan versatilidad en su interpretación.',
    },
    {
      name: 'VAI',
      url: '../assets/img/guitarra_04.jpg',
      price: 1359000,
      description: 'Una guitarra diseñada para los amantes de los solos rápidos y precisos, con una estética llamativa y un sonido inconfundible.',
    },
    {
      name: 'THOMPSON',
      url: '../assets/img/guitarra_05.jpg',
      price: 1009000,
      description: 'Esta guitarra ofrece una construcción clásica con un sonido cálido y definido, ideal para diversos géneros musicales.',
    },
    {
      name: 'WHITE',
      url: '../assets/img/guitarra_06.jpg',
      price: 1499000,
      description: 'Un modelo con una excelente relación calidad-precio, diseñada para ofrecer un rendimiento sobresaliente en cualquier escenario.',
    },
    {
      name: 'COBAIN',
      url: '../assets/img/guitarra_07.jpg',
      price: 1199000,
      description: 'Con un sonido grunge característico y una construcción resistente, esta guitarra es ideal para los fanáticos de Nirvana y el rock alternativo.',
    },
    {
      name: 'DALE',
      url: '../assets/img/guitarra_08.jpg',
      price: 1199000,
      description: 'Una guitarra diseñada para surf rock, con un sonido brillante y una construcción que asegura durabilidad y comodidad.',
    },
    {
      name: 'KRIEGER',
      url: '../assets/img/guitarra_09.jpg',
      price: 1799000,
      description: 'Perfecta para los amantes del rock clásico, esta guitarra ofrece un tono cálido y una ejecución suave, ideal para cualquier nivel de experiencia.',
    },
    {
      name: 'CAMPBELL',
      url: '../assets/img/guitarra_10.jpg',
      price: 1199000,
      description: 'Con un diseño inspirado en el country y el rock sureño, esta guitarra combina estética y funcionalidad en un solo instrumento.',
    },
    {
      name: 'REED',
      url: '../assets/img/guitarra_11.jpg',
      price: 1199000,
      description: 'Una guitarra que ofrece un equilibrio perfecto entre tono, comodidad y estilo, ideal para músicos versátiles.',
    },
    {
      name: 'HAZEL',
      url: '../assets/img/guitarra_12.jpg',
      price: 1499000,
      description: 'Con un sonido potente y claro, esta guitarra es perfecta para quienes buscan un instrumento de alta calidad a un precio accesible.',
    },
  ];

}
