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
    imageUtl : 'assets/biking.jpeg',
    username: 'cat',
    content: 'I saw a cat on the road'
    },
    {  title: '3',
    imageUtl : 'assets/mountain.jpeg',
    username: 'dog',
    content: 'let us go to the mountain'
    }
  ]

}
