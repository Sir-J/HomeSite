import { Component, OnInit } from '@angular/core';
import { StateService } from 'ui-router-core';

import { News } from '../models';
import { NewsService } from '../services';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  public news: News = new News();

  constructor(private newsService: NewsService, private stateService: StateService) { }

  ngOnInit() {    
    this.newsService.getNews(this.stateService.params.id)
      .then(news => {
        this.news = news
      });
  }

}
