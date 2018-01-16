import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent {
  posts: Post[];

  constructor(private postService:PostService) { 
    postService.getPosts().subscribe((response)=>{
      console.log(response.json());
      this.posts=response.json();
    });
  }

  ngOnInit() {
  }

}
interface Post{
  id:number;
  title:string;
  body:string;
}
