import { Component, OnInit } from '@angular/core';
import { DataNewsService } from '../data-news.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [];
  constructor(private data: DataNewsService) { }
  ngOnInit(): void {
    this.posts = this.data.getAll();
  }
}
