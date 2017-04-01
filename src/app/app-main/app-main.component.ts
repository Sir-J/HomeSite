import { Component, OnInit } from '@angular/core';
import { News } from '../models';
import { NewsService } from '../services';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {

  news:News[];

    constructor(private newsService: NewsService){

    }

    ngOnInit(): void {
      this.newsService.getAllNews()
          .then(news => {
            console.log(news);
            this.news = news});
    }

}
