import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';

import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

import { NewsService } from './services/news.service'
import { NEWS_STATES } from './news.states';
import { NewsIndexComponent } from './news-index/news-index.component'

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: NEWS_STATES }),
    FormsModule,
    CommonModule
  ],
  declarations: [
    NewsComponent,
    NewsDetailComponent,
    NewsIndexComponent
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
