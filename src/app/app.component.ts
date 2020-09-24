import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUtl : 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    { title: '2',
    imageUtl : 'assets/tree.jpeg',
    username: 'nature',
    content: '2I saw this neat tree today'
    },
    {  title: '3',
    imageUtl : 'assets/tree.jpeg',
    username: 'nature',
    content: '2I saw this neat tree today'
    }
  ]

}
