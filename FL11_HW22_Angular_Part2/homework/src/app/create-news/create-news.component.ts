import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'create-news',
    templateUrl: './create-news.component.html',
    styleUrls: ['./create-news.component.scss']
})
export class CreateNews implements OnInit {

    posts = [];
    constructor() { }
    ngOnInit() {
    }
}
