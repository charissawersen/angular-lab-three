import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RedditResponse {
  title: string;
  link: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class AwwPostsService {
  awwPost: RedditResponse[] = [];

  constructor(private http: HttpClient) {}

  // urlString: string = 'https://www.reddit.com/r/aww/.json';

  getAwwPost() {
    const url = 'https://www.reddit.com/r/aww/.json';
    this.http.get(url).subscribe(
      (response: any) => {
        console.log(response);
        const posts = response.data.children;

        for (let post of posts) {
          const redditPost: RedditResponse = {
            title: post.data.title,
            link: 'https://reddit.com' + post.data.permalink,
            image: post.data.thumbnail,
          };
          this.awwPost.push(redditPost);
        }
        console.log(this.awwPost);
      }
      // (error) => console.log(error)
    );
  }
}
