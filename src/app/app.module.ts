// import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdInputModule,MdTabsModule, MdIconModule, MdCardModule} from '@angular/material';

// import services
import { ApiService } from "./services/api.service";
import {SlugService} from "./services/slug.service";
import { appRoutingProviders, routing } from './app.routing'

//import components
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { HomeComponent } from './components/home/home.component';
import 'hammerjs';
import { GenreComponent } from './components/genre/genre.component';
import { BookComponent } from './components/book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    HomeComponent,
    GenreComponent,
    BookComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpModule, routing, BrowserAnimationsModule,
    NoopAnimationsModule, MdButtonModule,MdInputModule,MdTabsModule,MdIconModule,MdCardModule
  ],
  providers: [ApiService, SlugService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
