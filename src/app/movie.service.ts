import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './Movie';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private Address = 'http://localhost:59585/api/';

  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.Address + 'movies');

  }

  public deleteMovie(id): Observable<Object> {
    return this.http.delete(this.Address + 'movies/' + id);
  }

  public addMovie(movie: Movie) : Observable<Movie> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post<Movie>(this.Address + 'movies', JSON.stringify(movie), {headers: headers});

  }
}
