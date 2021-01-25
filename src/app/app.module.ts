import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedditPostsComponent } from './reddit-posts/reddit-posts.component';
import { RedditPostItemComponent } from './reddit-post-item/reddit-post-item.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, RedditPostsComponent, RedditPostItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
