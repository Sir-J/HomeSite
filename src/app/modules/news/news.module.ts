import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsIndexComponent } from './news-index/news-index.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './services/news.service';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [NewsComponent, NewsDetailComponent, NewsIndexComponent],
    providers: [NewsService]
})
export class NewsModule {}
