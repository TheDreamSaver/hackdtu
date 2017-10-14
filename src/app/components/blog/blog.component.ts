import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Blog } from './blog';
import { BlogService } from '../../services/blog.service';

@Component({
  moduleId: module.id,
  selector: 'blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
})
export class BlogComponent implements OnInit {
  pageTitle: string = "Blog";
  blogs: Blog[];
  

  constructor(
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });
  }
} 