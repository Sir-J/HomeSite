import { User, AuthOptions } from './models/index';

export const defaults: AuthOptions<User> = {
    tokenName: 'access_token',
    tokenEndpoint: '/identity/connect/token',
    userType: User,
    storageTokenName: 'app_access_token'
};

