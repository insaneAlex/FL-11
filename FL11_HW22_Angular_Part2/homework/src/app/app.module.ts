import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { MaterialModule } from './material.module';
import { CreateNews } from './create-news/create-news.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBxH9AWsAeB36qakxNirEhOLrNVHofd310",
  authDomain: "angularhw2.firebaseapp.com",
  databaseURL: "https://angularhw2.firebaseio.com",
  projectId: "angularhw2",
  storageBucket: "angularhw2.appspot.com",
  messagingSenderId: "400133680450",
  appId: "1:400133680450:web:28bf09c23f9d827a6decdb"
};

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CreateNews
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
