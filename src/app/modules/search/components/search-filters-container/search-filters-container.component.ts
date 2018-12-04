import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filters-container',
  templateUrl: './search-filters-container.component.html',
  styles: []
})
export class SearchFiltersContainerComponent implements OnInit {
  categoryFilter = {
    'type': 'category',
    'selection': 'single',
    'display_name': 'Category',
    'item': {
      'id': 5,
      'display_name': 'Men Clothing',
      'value': 'men_clothing'
    },
    'children': [
      {
        'id': 7,
        'display_name': 'Shirt',
        'value': 'shirt'
      },
      {
        'id': 8,
        'display_name': 'Tshirt',
        'value': 'tshirt'
      },
      {
        'id': 9,
        'display_name': 'Jeans',
        'value': 'jeans'
      }
    ],
    'path': [
      {
        'id': 1,
        'display_name': 'Clothing',
        'value': 'clothing'
      },
      {
        'id': 2,
        'display_name': 'Men Clothing',
        'value': 'men_clothing'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
