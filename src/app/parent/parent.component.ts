import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit",performance.now())
  }
 

}
