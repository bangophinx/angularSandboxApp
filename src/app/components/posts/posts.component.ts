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
  isEdit = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

  addNewPost(post: Post) {
    this.posts.unshift(post);
    this.currentPost = {
      id: 0,
      title: '',
      body: ''
    };
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  updateView(post: Post) {
    this.posts.forEach((cur, index) => {
      if (cur.id === post.id) {
        this.posts.splice(index, 1);
      }
    });
    this.posts.unshift(post);
    this.isEdit = false;
    this.currentPost = {
      id: 0,
      title: '',
      body: ''
    };
  }

  deletePost(post: Post) {
    this.postService.onDelete(post as Post).subscribe(item =>
      this.posts.forEach((cur, index) => {
        if (cur.id === post.id) {
          this.posts.splice(index, 1);
        }
      })
    );
  }
}
