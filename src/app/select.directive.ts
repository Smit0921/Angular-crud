import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  constructor(private template:TemplateRef<any>,private view:ViewContainerRef) 
  { 
   
  }
  @Input() set appSelect(condition:boolean){
      if(condition){
          this.view.createEmbeddedView(this.template);
      }else{
        this.view.clear();
      }
  }
}
