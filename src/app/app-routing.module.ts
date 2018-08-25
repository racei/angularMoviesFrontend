import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddMovieWrapperComponent } from './add-movie-wrapper/add-movie-wrapper.component';

const routes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: 'edit/:id', component: EditMovieComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'movies/add', component: AddMovieWrapperComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }
