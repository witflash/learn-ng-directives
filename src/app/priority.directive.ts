import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[priority]',
})
export class PriorityDirective {
  @Input('priority') priority: string;

  constructor(
    private elementRef: ElementRef,
    // private color: string
  ) {}

  ngOnInit() {
    let color;
    if (this.priority == '1') {
      color = 'green';
    } else if (this.priority == '2') {
      color = 'tomato'
    }
    this.elementRef.nativeElement.style.color = color;
  }
}
