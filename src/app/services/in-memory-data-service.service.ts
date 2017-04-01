import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let news = [
      {
        "Id": 1,
        "DateAdd": "2017-03-01 16:00:00",
        "Title": "Новость 1",
        "Content": "Подробности новости"
      },
      {
        "Id": 2,
        "DateAdd": "2017-03-02 17:00:00",
        "Title": "Новость 2",
        "Content": "Подробности новости"
      },
      {
        "Id": 3,
        "DateAdd": "2017-03-03 15:00:00",
        "Title": "Новость 3",
        "Content": "Подробности новости"
      }
    ];

    let users = [
      {
        "id": 1,
        "name": "user1",
        "surname": "surname1",
        "login": "login1"
      },
      {
        "id": 2,
        "name": "user2",
        "surname": "surname2",
        "login": "login2"
      },
      {
        "id": 3,
        "name": "user3",
        "surname": "surname3",
        "login": "login3"
      }
    ];

    return { news };
  }
}


