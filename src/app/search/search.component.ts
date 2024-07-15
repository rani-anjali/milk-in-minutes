import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor() { }

  ngOnInit(): void {
  }
  @Output()

  searchProduct:EventEmitter<string>=new EventEmitter<string>();

  searchString:string="";

  searchData(){
    this.searchProduct.emit(this.searchString);
  }
  
}
