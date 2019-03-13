import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public allBlogs;
constructor  (public blogservice:BlogService) { }

  ngOnInit() {
    this.allBlogs=this.blogservice.getAllBlogs();
    console.log(this.allBlogs)
  }
  ngOnDestroy(){
    console.log("home component ondestroed called")

  }

}
