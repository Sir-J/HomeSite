import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AUTH_SERVICE, AuthService, User } from 'app/modules/auth';


@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router, @Inject(AUTH_SERVICE) private authService: AuthService<User>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/');
            return false;
        } else {
            return true;
        }
    }
}
