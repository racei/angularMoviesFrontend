import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie-wrapper',
  templateUrl: './add-movie-wrapper.component.html',
  styleUrls: ['./add-movie-wrapper.component.css']
})
export class AddMovieWrapperComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

  addMovie(movie: Movie){
    this.movieService.addMovie(movie).subscribe((data) =>{
      this.router.navigate(['movies']);
    });

  }

}
