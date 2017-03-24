import { Injectable } from '@angular/core';
import { UserContextService } from './userContext.service'

/**
 * This service emulates an Authentication Service.
 */
@Injectable()
export class AuthService {
  // data
  usernames: string[] = ['admin@admin.ru'];

  constructor(public userContextService: UserContextService) { }

  /**
   * Returns true if the user is currently authenticated, else false
   */
  isAuthenticated() {
    return !!this.userContextService.userContext;
  }

  /**
   * Fake authentication function that returns a promise that is either resolved or rejected.
   *
   * Given a username and password, checks that the username matches one of the known
   * usernames (this.usernames), and that the password matches 'password'.
   *
   * Delays 800ms to simulate an async REST API delay.
   */
/*
  authenticate(username:string, password:string) {
    const $userContextService = this.userContextService;

    // checks if the username is one of the known usernames, and the password is 'password'
    const checkCredentials = () => new Promise<string>((resolve, reject) => {
      const validUsername = this.usernames.indexOf(username) !== -1;
      const validPassword = password === 'password';

      return (validUsername && validPassword) ? resolve(username) : reject('Invalid username or password');
    });
    
    return wait(800)
      .then(checkCredentials)
      .then((authenticatedUser:any) => {
        $userContextService.userContext = authenticatedUser;
        $userContextService.save();
      });
  }
*/
  /** Logs the current user out */
  logout() {
    this.userContextService.userContext = undefined;
    this.userContextService.save();
  }
}
