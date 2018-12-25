import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { AuthService, User, AUTH_SERVICE } from 'app/modules/auth';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, @Inject(AUTH_SERVICE) private authService: AuthService<User>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            if (state.url !== '/') {
                this.router.navigateByUrl(`/login?redirectUrl=${encodeURIComponent(state.url)}`);
            } else {
                this.router.navigateByUrl(`/login`);
            }
            return false;
        }
    }
}
