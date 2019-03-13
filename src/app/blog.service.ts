import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
public currentBlog;
  public allBlogs=[
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "create":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comady",
      "ispublished":true,
      "views":444432,
      "bodyHtml":"thisis the blog body",
      "description":"this is the blog 1 description",
      "title":"this is the blog 1"
    },
    {
      "blogId":"2",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "create":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comady",
      "ispublished":true,
      "views":444432,
      "bodyHtml":"thisis the blog body",
      "description":"this is the blog 2 description",
      "title":"this is the blog 2"
    },
    {
      "blogId":"3",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "create":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comady",
      "ispublished":true,
      "views":444432,
      "bodyHtml":"thisis the blog body",
      "description":"this is the blog 3 description",
      "title":"this is the blog 3"
    },
    {
      "blogId":"4",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "create":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comady",
      "ispublished":true,
      "views":444432,
      "bodyHtml":"thisis the blog body",
      "description":"this is the blog 4 description",
      "title":"this is the blog 4"
    },
  ]

 
  constructor() {
    console.log("service is called");
   }
   public getAllBlogs():any{
    return this.allBlogs;
  }
  public getSingleBlogInformation(currentBlogId):any
  {
    for(let blog of this.allBlogs){
      if(blog.blogId==currentBlogId)
        {
          this.currentBlog=blog;
        }
      }
        console.log(this.currentBlog)
       return this.currentBlog;
  }
}
