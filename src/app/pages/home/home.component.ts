import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
}
