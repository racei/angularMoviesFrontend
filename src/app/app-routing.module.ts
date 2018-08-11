import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'movies-list', component: MoviesListComponent },
  { path: 'edit/:id', component: EditMovieComponent },
  { path: 'users', component: UsersListComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }
