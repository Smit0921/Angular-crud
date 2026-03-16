import { Directive, ElementRef, HostListener,input,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight='';

  name= input<any>

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundcolor = 'yellow';
    // this.el.nativeElement.style.background = 'white';

  }
  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('red')
  // }

  @HostListener('mouseleave') onMouseLEave() {
    this.highlight('');
  }
  @HostListener('mouseenter')onMouseEnter(){
    this.highlight(this.appHighlight|| 'red')
  }
}
