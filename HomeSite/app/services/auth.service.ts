import { Injectable } from '@angular/core';
import { UserContextService } from './userContext.service'
import { Headers, Http } from '@angular/http';
import { User, Login } from '../models/models'
import 'rxjs/add/operator/toPromise';

/**
 * This service emulates an Authentication Service.
 */
@Injectable()
export class AuthService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private loginUrl = '/login';  // URL to web api

    constructor(public userContextService: UserContextService, private http: Http) { }
      
    isAuthenticated() {
        return !!this.userContextService.userContext;
    }    
    
    authenticate(login: Login): Promise<User> {
        console.log(login);
        return this.http
          .post(this.loginUrl, JSON.stringify(login), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as User)
          .catch(this.handleError);
      }

    logout() {
        this.userContextService.userContext = undefined;
        this.userContextService.save();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
