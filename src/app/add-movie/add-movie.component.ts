import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() movie : Movie = new Movie();
  @Input() buttonText : string = '+';
  @Output() persist : EventEmitter<Movie> = new EventEmitter();
  movieForm: FormGroup;

  constructor(private movieService: MovieService, private router: Router ) { }
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
    this.movieForm = new FormGroup({
      'title': new FormControl(this.movie.title, Validators.required),
      'yearReleased': new FormControl(this.movie.yearReleased,[Validators.required, Validators.pattern(/\d{4}/)]),
      'length': new FormControl(this.movie.length, [Validators.required, Validators.pattern(/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/)])
    });

    this.movieForm.valueChanges.subscribe((data) => this.onValueChanged(data));


  }
  onValueChanged(data?: any) {
    if(!this.movieForm) { return; }
    const form = this.movieForm;

    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);

      if(control && control.dirty && !control.valid){
        const messages = this.validationMessages[field];
        for(const key in control.errors){
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'title': '',
    'yearReleased': '',
    'length': ''
  }

  validationMessages = {
    'title': {
      'required': 'Title is required'
    },
    'yearReleased': {
      'required': 'Year is required',
      'pattern': 'Year must match YYYY pattern'
    },
    'length': {
      'required': 'Length is required',
      'pattern': 'Length must be in HH:MM:SS or HH:MM format'
    }
  }

  addMovie() {
    if(!this.movieForm.valid){
      return;
    }
    this.movie.title = this.movieForm.get('title').value;
    this.movie.yearReleased = this.movieForm.get('yearReleased').value;
    this.movie.length = this.movieForm.get('length').value;
    this.persist.emit(this.movie);

  }

}
