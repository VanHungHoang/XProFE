import {RouterModule, Routes} from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { HomeComponent } from './components/home/home.component';
import { GenreComponent } from './components/genre/genre.component';
import { BookComponent } from './components/book/book.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'thao-luan',
        component: AuthorComponent 
    },
    {
        path: 'thao-luan/:slug',
        component: GenreComponent 
    },
    {
        path: 'sach/:slug',
        component: BookComponent 
    },
    { 
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full' 
    }
];
export const appRoutingProviders: any[] = [];

//export const routing = RouterModule.forRoot(appRoutes, {useHash: true}); // useHash : make url have character #
export const routing = RouterModule.forRoot(appRoutes);