import { Component } from '@angular/core';
import { DataNewsService } from './data-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataNewsService]
})
export class AppComponent {
  title = 'homework';
}
