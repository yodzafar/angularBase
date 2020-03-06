import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  title = 'Dynamic title';
  posts: Post[] = [
    {
      title: 'Learn Components',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      id: 1
    },
    // {
    //   title: 'Drink Coffee',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    //   id: 2
    // },
  ];
  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0] = {
        title: 'changed',
        text: 'changed2',
        id: 33
      };
    }, 3000);
  }
}
