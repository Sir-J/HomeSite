import { Injectable } from '@angular/core';

/**
 * This service stores and retrieves user preferences in session storage
 */
@Injectable()
export class UserContextService {    
    constructor() {
        this.load();
    }

    userContext: Object = null;    
    
    load() {
        try {
            const data = JSON.parse(sessionStorage.getItem('userContext'));
            return this.userContext = data;
        } catch (Error) { }

        return this;
    }

    save() {
        const str = JSON.stringify(this.userContext);
        sessionStorage.setItem('userContext', str);
    }

}

