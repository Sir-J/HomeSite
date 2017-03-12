import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppHeaderComponent } from './app.header.component'
import { AppFooterComponent } from './app.footer.component'

@NgModule({
  imports:      [ 
                    BrowserModule, 
                    FormsModule
                ],
  declarations: [ 
                    AppComponent,
                    AppHeaderComponent,
                    AppFooterComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
