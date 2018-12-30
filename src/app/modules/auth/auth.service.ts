import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthApiService } from './auth-api.service';
import { AuthTokenService } from './auth-token.service';
import { defaults } from './auth.constants';
import { AUTH_OPTIONS } from './auth.tokens';
import { AuthOptions, User } from './models';

const CLAIM_FULLACCESS = 'FullAccess';

@Injectable()
export class AuthService<T extends User> {
    readonly opts: AuthOptions<T>;
    readonly nulloUser: T;
    readonly user$: BehaviorSubject<T>;

    constructor(
        private authApi: AuthApiService,
        private authTokenService: AuthTokenService,
        private jwtHelperService: JwtHelperService,
        @Inject(AUTH_OPTIONS) options: AuthOptions<T>
    ) {
        this.opts = options || { userType: <new () => T>defaults.userType };
        this.opts.userType = this.opts.userType || <new () => T>defaults.userType;
        this.opts.tokenName = this.opts.tokenName || defaults.tokenName;
        this.nulloUser = new this.opts.userType();
        this.user$ = new BehaviorSubject<T>(this.nulloUser);
        this.init();
    }

    login(login: string, password: string): Observable<T> {
        return this.authApi.login(login, password).pipe(
            map(token => {
                if (token) {
                    const tokenValue = token[this.opts.tokenName];
                    if (tokenValue) {
                        this.authTokenService.saveToken(token[this.opts.tokenName]);
                    }
                }
                const currentUser = this.getUser();
                this.user$.next(currentUser);
                return currentUser;
            })
        );
    }

    isAuthenticated() {
        const currentUser = this.getUser();
        return (
            currentUser &&
            typeof currentUser.preferred_username !== 'undefined' &&
            currentUser.preferred_username !== '' &&
            currentUser.preferred_username !== null
        );
    }

    logout(): T {
        this.authTokenService.remove();
        const currentUser = this.getUser();
        this.user$.next(currentUser);
        return currentUser;
    }

    authorize(requiredClaims: string | string[] = null) {
        if (!this.isAuthenticated()) {
            return false;
        }
        const currentUser = this.getUser();
        if (currentUser.claims) {
            const claims: string[] = currentUser.claims instanceof Array ? currentUser.claims : [currentUser.claims];
            if (claims.includes(CLAIM_FULLACCESS)) {
                return true;
            }
            requiredClaims = requiredClaims instanceof Array ? requiredClaims : [requiredClaims];
            return requiredClaims.some(claim => claims.includes(claim));
        }
        return false;
    }

    getUser(): T {
        if (!this.tokenIsValid()) {
            return this.nulloUser;
        }
        try {
            const decoded = this.jwtHelperService.decodeToken();
            return Object.freeze(Object.assign<T, any>(new this.opts.userType(), decoded));
        } catch (e) {
            console.warn(e);
            return this.nulloUser;
        }
    }

    private init(): T {
        const currentUser = this.getUser();
        this.user$.next(currentUser);
        return currentUser;
    }

    private tokenIsValid() {
        const token: string = this.jwtHelperService.tokenGetter();

        if (!token) {
            return false;
        }

        try {
            const tokenExpired: boolean = this.jwtHelperService.isTokenExpired(token);
            return !tokenExpired;
        } catch (e) {
            console.warn(e);
            return false;
        }
    }
}
