import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  msgService = inject(MessageService);
  message = '';
  cdRef = inject(ChangeDetectorRef); 

  ngOnInit() {
    this.msgService.message$.subscribe((msg) => {
      console.log('Received:', msg);
      this.message = msg;
      this.cdRef.detectChanges(); 
    });
  }

}
