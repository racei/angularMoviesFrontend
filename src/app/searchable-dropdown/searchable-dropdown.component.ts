import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: ['./searchable-dropdown.component.css']
})
export class SearchableDropdownComponent implements OnInit {
  @Input() options : User[] = [];
  @Output() selected : EventEmitter<User> = new EventEmitter();
  private filteredOptions : User[] = [];
  private searchText = '';

  constructor() {
  }

  ngOnInit() {
  }
  ngAfterContentInit(){
    this.filteredOptions = this.options;
  }

  ngOnChanges(){
    this.filteredOptions = this.options;
  }


  filterValues(){
    this.filteredOptions = this.options.filter((ele) => ele.name.toLowerCase().includes(this.searchText.toLowerCase()))
  }

  callback(user: User){
    this.selected.emit(user); // Bubble user id to parent component
  }

}
