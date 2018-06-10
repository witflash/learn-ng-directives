import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  itemsArray: Array<any> = [
    {'Normal list item': 1},
    {'Important list item': 2},
    {'Another normal list item': 1},
    {'Just normal list item again': 1},
    {'And important list item too': 2}
  ] 

  showAllItems() {
    console.log(this.itemsArray);
  }
}
