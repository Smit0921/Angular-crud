import { Directive, ElementRef} from '@angular/core';
@Directive({
    selector: '[appDarkMode]'
  })
  export class DarkModeDirective {
    constructor(private el: ElementRef) {
      this.el.nativeElement.style.backgroundColor = 'black';
      this.el.nativeElement.style.color = 'white';
    }
  }
  