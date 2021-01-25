import { TestBed } from '@angular/core/testing';

import { AwwPostsService } from './aww-posts.service';

describe('AwwPostsService', () => {
  let service: AwwPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwwPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
