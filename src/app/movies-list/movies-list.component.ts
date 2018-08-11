import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: [MovieService],
})
export class MoviesListComponent implements OnInit {

  private movies: Movie[] = [];
  thinking = false;
  newTitle = '';
  newLength = '';
  newYearReleased = '';

  constructor(private movieService: MovieService) {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  deleteMovie(id) {
    const req = this.movieService.deleteMovie(id);
    this.thinking = true;
    req.subscribe((data) => {
      // Movie successfully deleted
      this.thinking = false;
      this.movies = this.movies.filter((element) => {
        return element.id !== id;
      });

    });
  }

  addMovie() {
    const newMovie = new Movie();
    newMovie.title = this.newTitle;
    newMovie.yearReleased = Number.parseInt(this.newYearReleased);
    newMovie.length = this.newLength;
    this.movieService.addMovie(newMovie).subscribe((data) => {
      this.movies.push(data);
    });

  }

  ngOnInit() {
  }

}
