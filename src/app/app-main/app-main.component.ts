import { Component, OnInit } from '@angular/core';
import { NewsModule } from '../news/news.module';
import { NewsService } from "../news/services/news.service";
import { News } from "../news/models/news";


@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css'],
})
export class AppMainComponent implements OnInit {

  public news: News[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getAllNews()
      .then(news => {
        this.news = news
      });
  }

}
