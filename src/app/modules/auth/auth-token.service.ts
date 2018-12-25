import { Inject, Injectable } from '@angular/core';

import { defaults } from './auth.constants';
import * as AuthTokens from './auth.tokens';
import { AuthOptions, User } from './models/index';

@Injectable()
export class AuthTokenService {

  private storageTokenName: string;

  constructor(
    @Inject(AuthTokens.AUTH_OPTIONS) options: AuthOptions<User>
  ) {
    const opts = options || { userType: User };
    this.storageTokenName = opts.storageTokenName || defaults.storageTokenName;
  }

  public saveToken(token: string): void {
    return localStorage.setItem(this.storageTokenName, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.storageTokenName);
  }

  public remove(): void {
    localStorage.removeItem(this.storageTokenName);
  }
}
