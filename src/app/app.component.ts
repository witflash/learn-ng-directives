import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  public itemsArray: Array<any> = [
    { title: 'Normal list item', priority: 1 },
    { title: 'Important list item', priority: 2 },
    { title: 'Another normal list item', priority: 1 },
    { title: 'Just normal list item again', priority: 1 },
    { title: 'And important list item too', priority: 2 },
  ];

  showAllItems() {
    console.log(this.itemsArray);
  }
}
