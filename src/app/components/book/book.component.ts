import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  urlStoryByName: string = "http://localhost:54903/api/Stories/name/";
  storyslug: string;
  constructor(private bookapi: ApiService,
    private activatedRoute: ActivatedRoute) { }
  private sub: any;
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params: Params) => {
      this.storyslug = params['slug'];
      this.getdata(this.storyslug);
    });

  }
  getdata(slug) {
    console.log(111)
    this.bookapi.getApi(this.urlStoryByName + this.storyslug)
    .subscribe(data => {
      console.log(data);
    })
  }
}
