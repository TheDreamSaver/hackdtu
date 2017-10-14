import { Blog } from '../components/blog/blog';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {
  blogs: FirebaseListObservable<any[]>;
  blog: FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.blogs = this.af.list('/blog') as FirebaseListObservable<Blog[]>;
  }

  getBlogs(){
    return this.blogs;
  }
}