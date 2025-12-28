import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Carrousel, ServiceImage } from '../../components/carrousel/carrousel';

@Component({
  selector: 'app-home',
  imports: [Footer, Carrousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
serviceImages: ServiceImage[] = [
    { src: 'img/servicios/1.svg', alt: 'Servicio 1' },
    { src: 'img/servicios/2.svg', alt: 'Servicio 2' },
    { src: 'img/servicios/3.svg', alt: 'Servicio 3' },
    { src: 'img/servicios/4.svg', alt: 'Servicio 4' },
    { src: 'img/servicios/5.svg', alt: 'Servicio 5' },
    { src: 'img/servicios/6.svg', alt: 'Servicio 6' },
    { src: 'img/servicios/7.svg', alt: 'Servicio 7' },
    { src: 'img/servicios/8.svg', alt: 'Servicio 8' }
  ];
}
