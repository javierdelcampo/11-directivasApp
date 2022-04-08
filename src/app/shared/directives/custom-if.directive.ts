import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( condicion: boolean ){
    if (condicion) {
      this.viewContainer.createEmbeddedView ( this.templateRef );
    } else {
      this.viewContainer.clear(); // Oculta el elemento
    }
  }

  constructor(
      private templateRef: TemplateRef<HTMLElement>,
      private viewContainer: ViewContainerRef
  ) { };

}
