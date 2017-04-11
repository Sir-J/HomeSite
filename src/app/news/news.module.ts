import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

import { NewsService } from './services/news.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewsComponent,
    NewsDetailComponent
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
