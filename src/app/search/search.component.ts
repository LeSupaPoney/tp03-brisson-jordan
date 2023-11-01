import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm = new FormControl('');

  constructor(private searchService: SearchService) { }

  updateSearchTerm(term: string): void {
    this.searchService.updateSearchTerm(term);
  }
}