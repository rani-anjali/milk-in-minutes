import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  selectedCategory: string = '';
  categories: string[] = ['Milk', 'Cheese', 'Butter', 'Yogurt'];

  @Output() categorySelected = new EventEmitter<string>();

  onCategoryChange(): void {
    this.categorySelected.emit(this.selectedCategory);
  }
}
