import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component'
import { CreateNews } from './create-news/create-news.component'

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'create-news',
    component: CreateNews
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
