<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
=======
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";
>>>>>>> origin/master

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
<<<<<<< HEAD
  @Input() isEdit: Post;
=======
  @Input() isEdit: boolean;

>>>>>>> origin/master

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
<<<<<<< HEAD
      alert('Add title and body');
    } else {
      console.log(title, body);
      this.postService.savePost({ title, body } as Post).subscribe(post =>
        this.newPost.emit(post)
=======
      alert("Please add title and Body");
    }
    else {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
        console.log(post.id);
      }
>>>>>>> origin/master
      );
    }
  }

  updatePost() {
<<<<<<< HEAD
    this.postService.onPostUpdate(this.currentPost as Post).subscribe(post =>
      this.updatedPost.emit(post)
=======
    this.postService.onUpdatePost(this.currentPost).subscribe(post => {
      this.updatedPost.emit(post);
    }
      
>>>>>>> origin/master
    );
  }

}
