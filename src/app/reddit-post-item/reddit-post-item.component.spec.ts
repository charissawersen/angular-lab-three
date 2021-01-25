import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPostItemComponent } from './reddit-post-item.component';

describe('RedditPostItemComponent', () => {
  let component: RedditPostItemComponent;
  let fixture: ComponentFixture<RedditPostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditPostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
