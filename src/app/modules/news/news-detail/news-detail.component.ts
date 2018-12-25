import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { News } from '../models';
import { NewsService } from '../services';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
    public news: News = new News();

    constructor(private newsService: NewsService, private route: ActivatedRouteSnapshot) {}

    ngOnInit() {
        this.newsService.getNews(this.route.params.id).then(news => {
            this.news = news;
        });
    }
}
