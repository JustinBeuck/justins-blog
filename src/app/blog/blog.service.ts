import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Blog } from './blog.model';


@Injectable({providedIn: 'root'})
export class BlogsService {
  private blogs: Blog[] = [];
  private blogsUpdated = new Subject<Blog[]>();

  constructor(private http: HttpClient) {}

  getBlogs() {
     
    this.http
      .get<{ data: Blog[] }>(
        "../../assets/json/blogs.json"
      )
      .subscribe(blogData => {
        this.blogs = blogData.data;
        this.blogsUpdated.next([...this.blogs]);
      });
  }

  getBlogUpdateListener() {
    return this.blogsUpdated.asObservable();
  }

  addBlog(title: string, body: string, createdDate: Date) {
    const blog: Blog = {title: title, body: body, createdDate: createdDate};
    this.blogs.push(blog);

    this.blogsUpdated.next([...this.blogs]);
  }
}
