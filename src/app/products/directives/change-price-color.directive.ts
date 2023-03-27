import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appChangePriceColor]',
})
export class ChangePriceColorDirective implements OnInit {
  @Input() price: number;

  element: ElementRef;
  constructor(element: ElementRef) {
    this.element = element;
  }
  ngOnInit(): void {
    const color = {
      blue: '#259cbf',
      black: '#232323',
    };

    if (this.price > 1000) {
      this.element.nativeElement.style.color = color.blue;
    }
    if (this.price > 10000) {
      this.element.nativeElement.style.color = color.black;
    }
  }
}
