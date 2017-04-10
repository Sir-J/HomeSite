import { Component, OnInit } from '@angular/core';
import { News } from '../models';
import { NewsService } from '../services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews()
      .then(news => {
        this.news = news
      });
  }

}
