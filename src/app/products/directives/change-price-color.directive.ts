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
    if (this.price <= 100) {
      this.element.nativeElement.style.color = '#232323';
    } else if (this.price > 100 && this.price < 200) {
      this.element.nativeElement.style.color = '#b1d91a';
    } else {
      this.element.nativeElement.style.color = '#fe5f1e';
    }
  }
}
