import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: 'edit/:id', component: EditMovieComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'movies/add', component: AddMovieComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }
