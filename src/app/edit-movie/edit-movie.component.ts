import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { Movie } from '../Movie';
import { User } from '../User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: Movie;
  allUsers: User[];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getMovie();
    this.getUsers();
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data;
    });
  }

  getMovie(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe((data) => {
      this.movie = data;
    });
  }

  saveMovie(){
    this.movieService.updateMovie(this.movie).subscribe((data) => {
      //success
    });
  }

  inputCallback(userID){
    console.log('I got callllled back');
    this.allUsers.filter((ele) => ele.id == userID).forEach(x => this.movie.usersWatched.push(x));
    this.saveMovie();
    //  Add selected user to movie

  }

}
