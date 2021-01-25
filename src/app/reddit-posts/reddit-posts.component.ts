import { Component, OnInit } from '@angular/core';
import { AwwPostsService } from 'src/aww-posts.service';

@Component({
  selector: 'app-reddit-posts',
  templateUrl: './reddit-posts.component.html',
  styleUrls: ['./reddit-posts.component.css'],
  providers: [AwwPostsService],
})
export class RedditPostsComponent implements OnInit {
  constructor(public awwPostsService: AwwPostsService) {}

  ngOnInit(): void {
    this.awwPostsService.getAwwPost();
  }
}
