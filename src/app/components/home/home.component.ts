import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stories: Story[]
  show: boolean = true;
  constructor( private _storyApiService: ApiService) { }
 
  ngOnInit() {
    this._storyApiService.getApi("http://localhost:54903/api/stories/").subscribe(data =>{
      this.stories = data;
    })
  }

}
