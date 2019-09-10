import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataNewsService {
  newsList: AngularFireList<any>;
  db: AngularFireDatabase;
  countNews: number = 0;

  ngOnInit() {
    this.newsList = this.db.list('/todos', ref =>
      ref.limitToFirst(11));
    this.newsList.snapshotChanges().subscribe(tmp => {
      this.countNews = tmp.length;
    })
  }
  // getAll(): any[] {
  //   return [
  //     {
  //       title: "Other News",
  //       details: "We know this group of individuals was conducting surveillance on him, they were watching him, following him. We know they watched as he left the laundromat and went back across the street to the apartment complex and that is where some of those individuals accosted him,” Baltimore County Police Officer Jennifer Peach told Fox 45",
  //       author: 'James Blanco'
  //     },
  //     {
  //       title: "Google News",
  //       details: 'DescriptionGoogle News is a news aggregator app developed by Google. It presents a continuous, customizable flow of articles organized from thousands of publishers and magazines. Google News is available as an app on Android, iOS, and the Web. Google released a beta version in September 2002 and the official app in January 2006',
  //       author: 'Isaak Boo'
  //     },
  //     {
  //       title: "Could a no-deal Brexit still happen on 31 October?",
  //       details: 'Under the act - introduced as a bill by Labour MP Hilary Benn - Boris Johnson might have to request a Brexit extension on 19 October, pushing the deadline back to 31 January 2020.',
  //       author: 'Isaak Boo'
  //     }, {
  //       title: "There is a way to get a Brexit deal, PM insists",
  //       details: 'The PM said "loads of people" wanted an agreement, but he was prepared to leave without one if "absolutely necessary". Parliament will not resume sitting until 14 October, three days before a crucial Brexit summit of EU leaders. The PM, who has met the leadership of Northern Ireland\'s DUP, said claims this was undemocratic were "nonsense".',
  //       author: 'Isaak Boo'
  //     }
  //   ]
  // }
  constructor() { }
}
