import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/Post";
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
    // this.currentPost = {
    //   id: 0,
    //   title: '',
    //   body: ''
    // };
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onPostUpdate(post: Post) {
    this.posts.forEach((cur, index) => {
      if (cur.id === post.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        };
      }
    });
  }

  removePost(post: Post) {
    if (confirm('Are you Sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (cur.id === post.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }

  }

}
