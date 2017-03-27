import { Component, OnInit  } from '@angular/core';
import { News } from './../models/models'
import { NewsService } from './../services/services'

@Component({
  selector: 'app-main',
  templateUrl: '/app/main/main.component.html'
})
export class MainComponent implements OnInit {
    news:News[];

    constructor(private newsService: NewsService){

    }

    ngOnInit(): void {
      this.newsService.getAllNews()
          .then(news => this.news = news );
    }
}