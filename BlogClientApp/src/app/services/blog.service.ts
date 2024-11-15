import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../BlogPost'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public apiUrl = 'http://localhost:5276/api/blog'; 

  constructor(private http: HttpClient) { }

  // Get all blog posts
  getBlogs(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }

  // Get a blog post by ID
  getBlogById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
  }

  // Add a new blog post
  addBlog(blog: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.apiUrl, blog, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Update an existing blog post
  updateBlog(blog: BlogPost): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${blog.id}`, blog, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Delete a blog post by ID
  deleteBlog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
