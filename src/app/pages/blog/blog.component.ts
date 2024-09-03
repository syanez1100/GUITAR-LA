import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blog = [
    {
      title: 'Cómo Elegir la Guitarra Perfecta para Principiantes',
      summary: 'Descubre los aspectos clave a considerar al seleccionar tu primera guitarra. Desde el tipo de guitarra hasta el presupuesto, te ayudamos a tomar la mejor decisión.',
      date: '2024-09-03',
      image: '/assets/img/blog_1.jpg',
    },
    {
      title: 'Las 5 Mejores Marcas de Guitarras en 2024',
      summary: 'Explora nuestro top 5 de marcas de guitarras que dominan el mercado en 2024. Conoce sus características, calidad y por qué son las favoritas de los músicos.',
      date: '2024-09-10',
      image: '/assets/img/blog_2.jpg',
    },
    {
      title: 'Mantenimiento Básico de tu Guitarra: Consejos y Trucos',
      summary: 'Mantén tu guitarra en perfecto estado con estos consejos de mantenimiento básico. Aprende cómo limpiar, ajustar y cuidar tu instrumento para prolongar su vida útil.',
      date: '2024-09-17',
      image: '/assets/img/blog_3.jpg',
    },
    {
      title: 'Accesorios Esenciales para Guitarristas: Lo que No Puede Faltar',
      summary: 'Desde púas hasta afinadores, descubre los accesorios que todo guitarrista debe tener en su arsenal. Mejora tu experiencia musical con estas herramientas imprescindibles.',
      date: '2024-09-24',
      image: '/assets/img/blog_4.jpg',
    },
  ];

}
