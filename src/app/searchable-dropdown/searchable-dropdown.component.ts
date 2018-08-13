import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: ['./searchable-dropdown.component.css']
})
export class SearchableDropdownComponent implements OnInit {
  @Input() options : any[] = [];
  @Output() selected : EventEmitter<any> = new EventEmitter();
  private filteredOptions : any[] = [];
  private searchText = '';

  constructor() {
  }

  ngOnInit() {
  }
  ngAfterContentInit(){
    this.filteredOptions = this.options;
  }

  filterValues(){
    this.filteredOptions = this.options.filter((ele) => ele.name.toLowerCase().includes(this.searchText.toLowerCase()))
  }

  callback(evnt){
    this.selected.emit(evnt.value); // Bubble user id to parent component
  }

}
