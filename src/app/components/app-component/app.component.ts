import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    @BlockUI()
    blockUI: NgBlockUI;
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.blockUI.start('Загружаем страницу ...');
            }

            if (event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
                this.blockUI.stop();
            }

            if (event instanceof NavigationCancel) {
                this.blockUI.stop();
            }

            if (event instanceof NavigationError) {
                this.blockUI.stop();
                console.log(event.error);
            }
        });
    }
}
