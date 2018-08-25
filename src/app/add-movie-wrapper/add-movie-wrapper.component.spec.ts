import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieWrapperComponent } from './add-movie-wrapper.component';

describe('AddMovieWrapperComponent', () => {
  let component: AddMovieWrapperComponent;
  let fixture: ComponentFixture<AddMovieWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
