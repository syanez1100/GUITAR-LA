import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent {
  entrada = {
    title: 'Cómo Elegir la Guitarra Perfecta para Principiantes',
    summary: 'Descubre los aspectos clave a considerar al seleccionar tu primera guitarra. Desde el tipo de guitarra hasta el presupuesto, te ayudamos a tomar la mejor decisión.',
    date: '2024-09-03',
    image: './assets/img/blog_1.jpg',
  };
}
