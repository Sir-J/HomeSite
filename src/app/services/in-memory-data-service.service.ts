import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let news = [
      {
        "Id": 1,
        "DateAdd": "2017-03-01 16:00:00",
        "Title": "Aperiam eaque ipsa",
        "Content": `<p>Lorem ipsum dolor sit amet. Sunt, explicabo excepturi sint, obcaecati cupiditate non recusandae. Optio, cumque nihil molestiae non provident, similique sunt in ea commodi autem. Vero eos et harum quidem rerum. Ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. In culpa, qui sequi nesciunt, neque porro quisquam est. Voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem. Earum rerum necessitatibus saepe eveniet, ut et harum quidem rerum.</p>
                    <p>Expedita distinctio expedita distinctio a sapiente delectus, ut perspiciatis, unde omnis. Veniam, quis nostrum exercitationem ullam. Debitis aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus. Impedit, quo voluptas assumenda est, qui ratione voluptatem accusantium doloremque. Blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et voluptates. Mollitia animi, id est eligendi optio, cumque nihil molestiae consequatur. Voluptatibus maiores alias consequatur aut reiciendis voluptatibus maiores alias consequatur.</p>
                    <p>Esse, quam nihil impedit, quo minus id, quod maxime placeat, facere possimus. Aliquid ex ea voluptate velit esse. Animi, id est eligendi optio, cumque nihil molestiae consequatur, vel illum. Saepe eveniet, ut aut reiciendis. Consequatur, vel eum iure reprehenderit, qui dolorem. Consequatur aut reiciendis voluptatibus maiores alias consequatur aut rerum. Magni dolores et quas molestias excepturi. Deserunt mollitia animi, id est eligendi optio cumque.</p>`
      },
      {
        "Id": 2,
        "DateAdd": "2017-03-02 17:00:00",
        "Title": "Accusantium doloremque",
        "Content": `<p>Lorem ipsum dolor sit amet. Laborum et dolore magnam aliquam quaerat voluptatem sequi nesciunt. Dolor sit, amet, consectetur adipisci. Error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque. Hic tenetur a sapiente delectus, ut perspiciatis, unde omnis voluptas assumenda. Ipsum, quia dolor repellendus totam. Autem quibusdam et expedita distinctio voluptates repudiandae sint et harum. Deserunt mollitia animi, id est et dolore. Voluptatem, quia dolor repellendus nemo enim.</p>
                    <p>Obcaecati cupiditate non provident, similique sunt in culpa, qui dolorem. Deserunt mollitia animi, id est et accusamus. Atque corrupti, quos dolores eos, qui in culpa. Velit, sed ut aliquid ex ea voluptate velit esse, quam nihil impedit. Error sit voluptatem sequi nesciunt neque. Quisquam est, qui blanditiis praesentium voluptatum deleniti. Assumenda est, omnis dolor sit, amet, consectetur, adipisci velit, sed quia.</p>
                    <p>Reprehenderit, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem. Ratione voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae. Sequi nesciunt, neque porro quisquam est. Inventore veritatis et dolorum fuga officia deserunt mollitia animi, id. Illum, qui delectus, ut aliquid ex ea voluptate. Exercitationem ullam corporis suscipit laboriosam, nisi ut aut odit aut fugit.</p>`
      },
      {
        "Id": 3,
        "DateAdd": "2017-03-03 15:00:00",
        "Title": "Commodi autem",
        "Content": `<p>Lorem ipsum dolor sit amet. Ut aut odit aut reiciendis voluptatibus maiores alias consequatur aut rerum. Sit voluptatem sequi nesciunt, neque porro quisquam est, omnis voluptas. Voluptates repudiandae sint et dolorum fuga ad minima veniam, quis nostrum exercitationem. Ab illo inventore veritatis. Molestias excepturi sint, obcaecati cupiditate non recusandae mollitia animi. Velit, sed quia voluptas nulla. Placeat, facere possimus, omnis iste. Earum rerum facilis est laborum et aut fugit.</p>
                    <p>Sunt, explicabo fugit, sed quia consequuntur. Velit esse, quam nihil impedit, quo minus. Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis. Quae ab illo inventore veritatis et quasi. Ut labore et aut reiciendis voluptatibus. Ipsa, quae ab illo inventore veritatis et dolore magnam aliquam quaerat voluptatem. Temporibus autem vel eum iure reprehenderit, qui blanditiis praesentium voluptatum. Dignissimos ducimus, qui reprehenderit, qui in ea commodi autem vel eum fugiat.</p>
                    <p>Hic tenetur a sapiente delectus, ut enim ipsam voluptatem. Obcaecati cupiditate non numquam eius modi tempora incidunt, ut enim. Eos et voluptates repudiandae sint et iusto odio dignissimos ducimus. Velit esse, quam nihil molestiae non provident, similique sunt. Dignissimos ducimus, qui blanditiis praesentium voluptatum. Corporis suscipit laboriosam, nisi ut enim ad minima. Harum quidem rerum facilis est.</p>`
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


