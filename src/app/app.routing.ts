import {RouterModule, Routes} from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { HomeComponent } from './components/home/home.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'thaoluan',
        component: AuthorComponent 
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