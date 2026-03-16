import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-directive',
  imports: [FormsModule,NgIf,NgFor,HighlightDirective],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent implements OnInit{
items: string[]=['Apple','Banana',"Watermalem",'Orange']
msgservice=inject(MessageService)
name:string ='smit';
namevisable:boolean=true;
color='';
stdObj:any[]=[
  { stId:111,sname:'aaa',mobno:'1111111111'},
  { stId:222,sname:'bbb',mobno:'2222222222'},
  { stId:333,sname:'aaa',mobno:'1111111111'},
  { stId:444,sname:'aaa',mobno:'1111111111'},  
  { stId:555,sname:'aaa',mobno:'1111111111'}
]
hideName(){
this.namevisable=false;
}
showName(){
  this.namevisable=true;
}
ngOnInit(): void {
  this.msgservice.message$.subscribe((msg)=>{
    this.name=msg;
  })
}
}
