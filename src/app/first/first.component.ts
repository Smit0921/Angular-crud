import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  msgService=inject(MessageService);

sendMessage(){
  this.msgService.sendMessage('Hello from first component')
}
}
