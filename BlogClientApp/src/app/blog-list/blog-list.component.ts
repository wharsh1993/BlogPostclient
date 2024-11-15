import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-blog-list',
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule,RouterModule,HttpClientModule],
  standalone:true,
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogPosts = data;
    });
  }
  deleteBlog(id: number): void {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.blogPosts = this.blogPosts.filter(c => c.id !== id);
    });
  }
}
