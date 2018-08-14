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

  private sortOptions(x,y){

      if(x.name < y.name)
        return -1;
      if(x.name > y.name)
        return 1;
      return 0;
  }

  private setFilteredOptions(){

    this.filteredOptions = this.options.sort(this.sortOptions);
  }
  ngAfterContentInit(){
    this.setFilteredOptions();
  }

  ngOnChanges(){
    this.setFilteredOptions();
  }


  filterValues(){
    this.filteredOptions = this.options.filter((ele) => ele.name.toLowerCase().includes(this.searchText.toLowerCase())).sort(this.sortOptions);
  }

  addUser(user: User){
    this.selected.emit(user); // Bubble user id to parent component
    this.searchText = '';
  }

}
