import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_SERVICE, AuthService, User } from 'app/modules/auth';

@Component({
    selector: 'app-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {
    constructor(@Inject(AUTH_SERVICE) private authService: AuthService<User>, private router: Router) {}

    get isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }

    ngOnInit() {}

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
