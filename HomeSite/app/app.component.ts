import { Component } from '@angular/core';
import { AppHeaderComponent } from  './app.header.component'
import { AppFooterComponent } from './app.footer.component'

@Component({
  selector: 'app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent {
    title = 'Герои';
}
 