import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News } from '../models'
/**
 * This service stores and retrieves user preferences in session storage
 */
@Injectable()
export class NewsService {    
    newsUrl:string = 'api/news'

    constructor(private http: Http) {        
    }

    getAllNews(): Promise<News[]> {
        return this.http.get(this.newsUrl)
          .toPromise()
          .then(response => response.json().data as News[])
          .catch(this.handleError);
      }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

