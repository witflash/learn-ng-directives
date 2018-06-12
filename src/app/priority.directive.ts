import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[priority]',
})
export class PriorityDirective {
  @Input('priority') priority: string;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.priority == '1') {
      this.elementRef.nativeElement.style.color = 'green';
    } else if (this.priority == '2') {
      this.elementRef.nativeElement.style.color = 'tomato'
    }
  }
}
