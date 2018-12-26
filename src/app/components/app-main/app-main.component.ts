import { Component, OnInit } from '@angular/core';

import { News } from '../../modules/news/models/news';

@Component({
    selector: 'app-app-main',
    templateUrl: './app-main.component.html',
    styleUrls: ['./app-main.component.less']
})
export class AppMainComponent implements OnInit {
    public news: News[];

    constructor() {}

    ngOnInit(): void {
        // this.newsService.getAllNews().then(news => {
        //     this.news = news;
        // });
    }
}
