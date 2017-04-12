import { Ng2StateDeclaration } from 'ui-router-ng2';
import { NewsComponent } from './news/news.component'
import { NewsIndexComponent } from './news-index/news-index.component'
import { NewsDetailComponent } from './news-detail/news-detail.component'

export const newsState: Ng2StateDeclaration = {
    parent: 'app',
    name: 'news',
    url: '/news',
    redirectTo: "news.index",
    component: NewsComponent,
};

export const newsIndexState = {    
    name: 'news.index',
    url: '',
    component: NewsIndexComponent,
};

export const newsDetailState = {    
    name: 'news.detail',
    url: '/:id',
    component: NewsDetailComponent,
};

export const NEWS_STATES = [
    newsState,
    newsIndexState,
    newsDetailState
];