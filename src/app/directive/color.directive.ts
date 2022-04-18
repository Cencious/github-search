import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.color='#8d021f';
   }

}
