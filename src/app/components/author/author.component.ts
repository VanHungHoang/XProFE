import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../services/api.service";
import {SlugService} from "../../services/slug.service";

import { Author } from "../../models/author.model";
import { Story } from "app/models/story.model";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[];
  stories: Story[];
  searchStr: string; nameSearch: string;
  start: number; end: number;
  show: boolean = true;
  urlApiAuthors: string = "http://localhost:54903/api/authors";
  urlApiStories: string = "http://localhost:54903/api/stories";

  constructor(private _authorApi: ApiService,
              private _slugSevice: SlugService) {}

  ngOnInit() {
    this._authorApi.getApi(this.urlApiAuthors).subscribe(
      author => {
        this.authors = author;
      });
  }

  //search name of authors
  search() {
    if (this.searchStr != null) {
      this.nameSearch = this._slugSevice.convertSlug(this.searchStr);
      this._authorApi.getApi(this.urlApiAuthors + "/name/" + this.nameSearch).subscribe(data => {
        this.authors = data;
      });
    }
  }

  //search author's stories
  getStoriesByAuthor(){
    if(this.searchStr !=null){
      this.show = false;
      this.nameSearch = this._slugSevice.convertSlug(this.searchStr);
      this._authorApi.getApi(this.urlApiStories + "/author/" + this.nameSearch + "/1/5").subscribe(data => {
        this.stories = data;
      });
    }
  }
}
