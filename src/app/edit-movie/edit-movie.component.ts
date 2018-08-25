import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { Movie } from '../Movie';
import { User } from '../User';
import { UsersService } from '../users.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  movie: Movie;
  allUsers: User[];
  filteredUsers: User[];
  movieForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data;
      const id = +this.route.snapshot.paramMap.get('id');
      this.movieService.getMovie(id).subscribe((data) => {
        this.movie = data;
        this.setUsersWatched();
      });
    });
  }

  private setUsersWatched(){
    const ids = this.movie.usersWatched.map(x => x.id);
    this.filteredUsers = this.allUsers.filter(x => !ids.includes(x.id));
  }
  saveMovie(movie: Movie){
    this.movieService.updateMovie(movie).subscribe((data) =>{});
  }

  updateUsersWatched(user){
    this.movie.usersWatched.push(user);
    this.filteredUsers = this.filteredUsers.filter(x => x.id !== user.id);
    this.saveMovie(this.movie);
  }

  removeUser(userID){
    this.movie.usersWatched = this.movie.usersWatched.filter(x => x.id !== userID);
    this.setUsersWatched();
    this.saveMovie(this.movie);
  }

}
