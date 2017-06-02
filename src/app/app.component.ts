import { Component, OnInit } from '@angular/core';
import { Genre } from "app/models/genre.model";
import { ApiService } from "app/services/api.service";
import { Author } from "app/models/author.model";
import {Story} from "./models/story.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categoryShow: boolean = false;
  urlApiGenre: string = "http://localhost:54903/api/genres";
  genres: Genre[];
  showstory: boolean = false;

  constructor( private genreApi: ApiService){}
  ngOnInit(){
  }
  openMenu(){
    this.categoryShow = true;
    this.genreApi.getApi(this.urlApiGenre).subscribe(data =>{
      this.genres = data;
      })
  }
  closeMenu(){
    this.categoryShow = false;
    console.log("close")
  }
  showStoryByGenre(e){
    e.stopPropagation()
    this.showstory = true;
  }
}

