import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles = dataFake.filter(article => article.id !== '1'); // Remove o artigo principal

  constructor() { }

  ngOnInit(): void {
  }

  getPhotoCover(id: string): string {
    const article = dataFake.find(article => article.id === id);
    return article ? article.photoCover : '';
  }

  getTitle(id: string): string {
    const article = dataFake.find(article => article.id === id);
    return article ? article.title : '';
  }

  getDescription(id: string): string {
    const article = dataFake.find(article => article.id === id);
    return article ? article.description : '';
  }
  ngAfterViewInit() {
    new Swiper('.vertical-swiper', {
      loop: true,
      loopAdditionalSlides: 1,
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
      mousewheel: true,
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
    });
  }
}
