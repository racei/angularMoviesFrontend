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
  filteredUsers: User[];
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
        const ids = this.movie.usersWatched.map(x => x.id);
        this.filteredUsers = this.allUsers.filter(x => !ids.includes(x.id));
      });
    });
  }


  saveMovie(){
    this.movieService.updateMovie(this.movie).subscribe((data) => {
    });
  }

  inputCallback(user){
    this.movie.usersWatched.push(user);
    this.filteredUsers = this.filteredUsers.filter(x => x.id !== user.id);
    this.saveMovie();
  }

}
