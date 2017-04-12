import { Component, OnInit } from '@angular/core';
import { News } from '../models';
import { NewsService } from '../services';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.css']
})
export class NewsIndexComponent implements OnInit {

  public news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
      .then(news => {
        this.news = news
      });
  }

}
