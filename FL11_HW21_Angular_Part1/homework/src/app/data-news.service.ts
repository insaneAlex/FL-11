import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataNewsService {
  getAll(): any[] {

    return [
      {
        title: "Lorem ipsum",
        details: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dapibus lectus nec scelerisque rhoncus. Nullam in arcu odio. Suspendisse lobortis ac lectus tristique consequat. Curabitur ac quam tempor, iaculis nunc non, rhoncus ipsum. Donec convallis sem id efficitur mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In molestie porta pharetra.",
        author: 'James Blanco'
      },
      {
        title: "Lorem ipsum dolor",
        details: "Nulla facilisi. Quisque nulla neque, malesuada at porta nec, porta non tortor. Curabitur feugiat elit id sem sagittis faucibus. Donec volutpat enim vel tristique egestas. Phasellus accumsan quam magna, sit amet aliquam sapien mollis vel. Etiam varius tellus id.",
        author: 'Isaak Boo'
      }
    ]
  }
  constructor() { }
}
