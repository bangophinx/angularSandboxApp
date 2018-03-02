import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Add title and body');
    } else {
      console.log(title, body);
      this.postService.savePost({title, body} as Post).subscribe(post =>
        this.newPost.emit(post)
      );      
    }
  }

  updatePost(){
    
  }


}
