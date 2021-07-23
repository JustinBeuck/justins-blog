import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogContainerComponent } from './blog-container/blog-container.component';
import { BlogRoutingModule } from './blog.route';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../material.module';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogCreateComponent,
    BlogContainerComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class BlogModule { }
