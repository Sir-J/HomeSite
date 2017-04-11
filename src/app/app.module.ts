import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NewsModule } from './news/news.module'

import { CarouselModule } from 'ngx-bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { UIRouterModule, UIView } from "ui-router-ng2";
import { APP_STATES } from "./app.states";
import { routerConfigFn } from './router.config';

import { AuthService, UserContextService, InMemoryDataService } from './services'



import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { LoginComponent } from './login/login.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppAboutComponent } from './app-about/app-about.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    LoginComponent,
    AppMainComponent,
    AppAboutComponent,
  ],
  imports: [
    UIRouterModule.forRoot({
      states: APP_STATES,
      otherwise: { state: 'main' },
      useHash: true,
      config: routerConfigFn
    }),
    BrowserModule,    
    FormsModule,
    HttpModule,
    NewsModule,
    CarouselModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
  ],
  providers: [ AuthService, UserContextService],  
  bootstrap: [UIView]
})
export class AppModule { }
