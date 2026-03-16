import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, effect, signal, ChangeDetectionStrategy, computed, untracked, OnInit, OnDestroy, AfterViewInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridComponent } from '../ag-grid/ag-grid.component';
import { ILargeTextEditorParams, LargeTextEditorModule, ValueGetterParams ,} from 'ag-grid-community';


@Component({
  selector: 'app-user',
  imports: [AgGridComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserComponent implements OnChanges,OnInit,OnDestroy,AfterViewInit {
  @Output() messageEvent = new EventEmitter<string>();
  @Input() childvalue: string = '';

  firstname = signal<string>("smit");
  lastname = signal('bhavshar');
  count = signal(0); // A reactive signal

  name: string = 'Angular';
  rowData = signal<any[]>([
    { id: '1', name: 'user', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '2', name: 'aman', lastname: 'bhavshar', Address: 'surat', mobilenumber: '96565654253' },
    { id: '3', name: 'bishesh', lastname: 'bhavshar', Address: 'nn', mobilenumber: '96565654253' },
    { id: '4', name: 'keval', lastname: 'bhavshar', Address: 'usa', mobilenumber: '96565654253' },
    { id: '5', name: 'dhruv', lastname: 'bhavshar', Address: 'modakeralasa', mobilenumber: '96565654253' },
    { id: '6', name: 'bhavesh', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '7', name: 'gourang', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '8', name: 'jaimin', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '9', name: 'yash', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '10', name: 'rahul', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '11', name: 'smit', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '12', name: 'aman', lastname: 'bhavshar', Address: 'surat', mobilenumber: '96565654253' },
    { id: '13', name: 'bishesh', lastname: 'bhavshar', Address: 'nn', mobilenumber: '96565654253' },
    { id: '14', name: 'keval', lastname: 'bhavshar', Address: 'usa', mobilenumber: '96565654253' },
    { id: '15', name: 'dhruv', lastname: 'bhavshar', Address: 'modakeralasa', mobilenumber: '96565654253' },
    { id: '16', name: 'bhavesh', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '17', name: 'gourang', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '18', name: 'jaimin', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' },
    { id: '19', name: 'yash', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' }
  ]);   
   ColDef:any[] = [
      { field: 'id' },
      {
        headerName: "Full name",
        valueGetter: (f: ValueGetterParams) => f.data.name + "  " + f.data.lastname,
        // rowGroup:true
      },
      { field: 'Address', filter: true,},
      { field: 'mobilenumber', editable: true ,   cellEditor: "agLargeTextCellEditor", cellEditorPopup: true,
        cellEditorParams: {
          rows: 15,
          cols: 50,
        } as ILargeTextEditorParams,
      }
    ];
  

    

 // derive a value from other signals and auto updating UI
  fullname = computed(() => this.firstname() + " " + this.lastname());

  constructor() {
    const fname = this.firstname();

    setTimeout(() => {
      // this.firstname.set('keval');
      this.name = 'React';
    }, 5000);

    //automatically track signal and no need manuaally track
    effect(() => {
      console.log("Count changed:", this.count());
      console.log("firstname untracked:",
        untracked(() => this.firstname()));//effect does not re-run because untrack prevent it to being dependency
    });

  }

  sendMessage() {
    this.messageEvent.emit("Hello from Child!");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('value change:', changes['childvalue'].currentValue);
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  ngAfterViewInit(): void {
  }
  Submit() {
    this.firstname.set('keval');

  }
  changeLastname() {
    this.lastname.set('kadiya')
  }
  increment() {
  
    this.count.set(this.count() + 1); // Triggers the effect
  }
  // getUser(){
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
  //     console.log(res.data)
  //   })
  // }




}
