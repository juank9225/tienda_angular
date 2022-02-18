import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter(){//aplicar directivas escuchando un evento el elemento al que se le agreg
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(private element:ElementRef) {
    //this.element.nativeElement.style.backgroundColor = 'red';
  }

}
