import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Story } from '../../models/story.model'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit, OnDestroy {
  stories: Story[] = [];
  urlApiGenre: string = "http://localhost:54903/api/genres";
  urlApiStoryByGenre: string = "http://localhost:54903/api/stories/genre/";
  genreSlug: string;
  private sub: any;
  checknull: boolean;

  constructor(private _genreApiService: ApiService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this._genreApiService.getApi(this.urlApiGenre).subscribe(data => {
    //   console.log(data);
    // });
    this.sub = this.activatedRoute.params.subscribe((params: Params) => {
      this.genreSlug = params['slug'];
      this.getdata(this.genreSlug);
    });
  }
  getdata(slug) {
    this._genreApiService.getApi(this.urlApiStoryByGenre + slug + "/1/5")
      .subscribe(data => {
        this.stories = data;
      });

  }
  isEmptyObject(obj) {
    return (Object.keys(obj).length === 0);
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

}
