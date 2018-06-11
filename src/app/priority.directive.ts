import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[priority]',
})
export class PriorityDirective {
  @Input('priority') item: string;
  @Input() itemsArray: Array<any>;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this.item);
    console.log(this.itemsArray);
  }
}
