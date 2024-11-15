import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from './services/blog.service';
import { BlogPost } from './BlogPost';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

describe('BlogService', () => {
  let service: BlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [BlogService,provideRouter(routes)]
    });

    service = TestBed.inject((BlogService));
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve all posts', () => {
    const dummyPosts: BlogPost[] = [
      { id: 1, username: 'wharsh',dateCreated :new Date(2024, 11, 12, 0, 0, 0), text: 'Myblog' },
      {  id: 2, username: 'Test2',dateCreated :new Date(2024, 11, 14, 0, 0, 0), text: 'This is test content 2' }
    ];

    service.getBlogs().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.apiUrl}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
