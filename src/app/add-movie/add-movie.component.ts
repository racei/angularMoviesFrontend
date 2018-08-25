import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  newTitle = '';
  newLength = '';
  newYearReleased = '';

  constructor(private movieService: MovieService, private router: Router ) { }

  ngOnInit() {
  }
  addMovie() {
    const newMovie = new Movie();
    newMovie.title = this.newTitle;
    newMovie.yearReleased = Number.parseInt(this.newYearReleased);
    newMovie.length = this.newLength;
    this.movieService.addMovie(newMovie).subscribe((data) => {
      this.router.navigate(['movies']);
    });

  }

}
