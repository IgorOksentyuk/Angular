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
      yellow: '#b1d91a',
      red: '#fe5f1e',
    };

    if (this.price > 100) {
      this.element.nativeElement.style.color = color.yellow;
    }
    if (this.price > 200) {
      this.element.nativeElement.style.color = color.red;
    }
  }
}
