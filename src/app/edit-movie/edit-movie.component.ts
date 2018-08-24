import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { Movie } from '../Movie';
import { User } from '../User';
import { UsersService } from '../users.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

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

  get title(){
    return this.movieForm.get('title');
  }

  get yearReleased(){
    return this.movieForm.get('yearReleased');
  }

  get length(){
    return this.movieForm.get('length');
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data;
      const id = +this.route.snapshot.paramMap.get('id');
      this.movieService.getMovie(id).subscribe((data) => {
        this.movie = data;
        this.movieForm = new FormGroup({
          'title': new FormControl(this.movie.title, Validators.required),
          'yearReleased': new FormControl(this.movie.yearReleased,[Validators.required, Validators.pattern(/\d{4}/)]),
          'length': new FormControl(this.movie.length, [Validators.required, Validators.pattern(/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/)])
        });
        this.setUsersWatched();
      });
    });
  }

  private setUsersWatched(){
    const ids = this.movie.usersWatched.map(x => x.id);
    this.filteredUsers = this.allUsers.filter(x => !ids.includes(x.id));
  }
  saveMovie(){
    if(!this.movieForm.valid){
      return;
    }
    this.movie.title = this.movieForm.get('title').value;
    this.movie.yearReleased = this.movieForm.get('yearReleased').value;
    this.movie.length = this.movieForm.get('length').value;
    this.movieService.updateMovie(this.movie).subscribe((data) => {
    });
  }

  updateUsersWatched(user){
    this.movie.usersWatched.push(user);
    this.filteredUsers = this.filteredUsers.filter(x => x.id !== user.id);
    this.saveMovie();
  }

  removeUser(userID){
    this.movie.usersWatched = this.movie.usersWatched.filter(x => x.id !== userID);
    this.setUsersWatched();
    this.saveMovie();
  }

}
