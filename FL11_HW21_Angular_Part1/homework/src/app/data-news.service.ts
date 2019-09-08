import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataNewsService {
  getAll(): any[] {

    return [
      {
        title: "Other News",
        details: "We know this group of individuals was conducting surveillance on him, they were watching him, following him. We know they watched as he left the laundromat and went back across the street to the apartment complex and that is where some of those individuals accosted him,” Baltimore County Police Officer Jennifer Peach told Fox 45",
        author: 'James Blanco'
      },
      {
        title: "Google News",
        details: 'DescriptionGoogle News is a news aggregator app developed by Google. It presents a continuous, customizable flow of articles organized from thousands of publishers and magazines. Google News is available as an app on Android, iOS, and the Web. Google released a beta version in September 2002 and the official app in January 2006',
        author: 'Isaak Boo'
      }
    ]
  }
  constructor() { }
}
