import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {trace, Category, UIRouterModule, UIView} from "ui-router-ng2";

import { APP_STATES } from "./app.states";

import { AppComponent }  from './app.component';
import { AppHeaderComponent } from './app.header.component'
import { AppFooterComponent } from './app.footer.component'
import { MainComponent } from './main/main.component'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'

import { routerConfigFn } from './router.config';
import { UserContextService, AuthService, NewsService } from './services/services';


@NgModule({
  imports:      [ 
                    BrowserModule, 
                    UIRouterModule.forRoot({
                      states: APP_STATES,
                      otherwise: { state: 'main' },
                      useHash: true,
                      config: routerConfigFn
                    }),
                    BrowserModule,
                    FormsModule,
                    HttpModule
                ],
  declarations: [ 
                    AppComponent,
                    AppHeaderComponent,
                    AppFooterComponent,
                    MainComponent,
                    AboutComponent,
                    LoginComponent
                ],
  providers: [
                { 
                    provide: NgModuleFactoryLoader, 
                    useClass: SystemJsNgModuleLoader 
                },
                UserContextService,
                AuthService,
                NewsService
             ],
  bootstrap:    [ UIView ]
})
export class AppModule { }
