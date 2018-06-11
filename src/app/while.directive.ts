import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appWhile]',
})
export class WhileDirective {
  @Input('appWhileOf') itemsArray: Array<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.itemsArray.forEach(item => {
      const key = Object.keys(item)[0];
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: key });
    });
  }
}
