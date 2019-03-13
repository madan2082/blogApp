import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {

  constructor(public blogservice:BlogService,private _route: ActivatedRoute, private router: Router) { }
  public currentBlog;
   

  ngOnInit() {

    let myBlogId=this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId);
    this.currentBlog=this.blogservice.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
    
  }

  
   
  ngOnDestroy(){
    console.log("blog vuiew component ondestroed called")

  }
}
