import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Blog } from '../blog.model';
import { BlogsService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
  blogs: Blog[] = [];
  private blogsSub!: Subscription;

  constructor(public blogsService: BlogsService) { }

  ngOnInit(): void {
    this.blogsService.getBlogs();
    this.blogsSub = this.blogsService.getBlogUpdateListener()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs;
      });
  }

  ngOnDestroy(): void {
    this.blogsSub.unsubscribe();
  }

}
