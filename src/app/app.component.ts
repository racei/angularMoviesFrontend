import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        height: '*'
      })),
      state('closed',   style({
        display: 'none',
        height: '0'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'Movie Tracker';
  public collapse = "closed";

  toggleMenu(){
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
  }
}
