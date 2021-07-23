import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {
  showBlogCreateComponent: boolean = false;

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
  }

  onAddBlogClick(): void {
    this.showBlogCreateComponent = true;
  }

  onCancelBlogClick(): void {
    this.showBlogCreateComponent = false;
  }

  onAddBlog(form: NgForm) {
    if (form.invalid) {
      return;
    }
    var today = new Date();

    this.blogsService.addBlog(form.value.title, form.value.content, today);
    form.resetForm();
  }

}
