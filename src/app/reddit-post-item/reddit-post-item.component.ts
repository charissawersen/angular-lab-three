import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reddit-post-item',
  templateUrl: './reddit-post-item.component.html',
  styleUrls: ['./reddit-post-item.component.css'],
})
export class RedditPostItemComponent implements OnInit {
  @Input() post: any;

  constructor() {}

  ngOnInit(): void {}
}
