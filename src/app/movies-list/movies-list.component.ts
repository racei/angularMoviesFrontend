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

  }

  ngOnInit() {
  }

}
