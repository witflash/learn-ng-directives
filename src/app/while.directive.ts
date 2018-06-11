import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appWhile]'
})
export class WhileDirective {

  @Input('appWhile') itemsArray: Array<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(){
    console.log(this.itemsArray);
    // for (let i = 0; i < this.itemsArray.length; i += 1) {
      // console.log(this.itemsArray[i]);
      // const newItem = this.renderer.createElement('li');
      // const text = this.renderer.createText(Object.keys(this.itemsArray[i])[0]);
      // const parent = this.viewContainer.el.nativeElement; 
      // this.renderer.appendChild(newItem, text);
      // this.viewContainer.createEmbeddedView(this.templateRef);
    // };   

    this.itemsArray.forEach(item => {
      console.log('item: ', item);
      this.viewContainer.createEmbeddedView(this.templateRef)
    });
  }
}
