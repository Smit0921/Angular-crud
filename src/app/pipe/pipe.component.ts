import { Component, inject, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { AgGridComponent } from '../ag-grid/ag-grid.component';
import { ColDef, ILargeTextEditorParams, RowDragModule, ValueGetterParams } from 'ag-grid-community';
import{ButtonComponent} from '../cell-renderer/button.component';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs';





@Component({
  selector: 'app-pipe',
  imports: [AgGridComponent,],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
// msgservice=inject(MessageService);
// http=inject(HttpClient)
RowGroupingPanelModule='always'

rowData: any[] = [
  { id: '1', name: 'smit', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253',age:22 },
  { id: '2', name: 'aman', lastname: 'bhavshar', Address: 'surat', mobilenumber: '96565654253',age:20  },
  { id: '3', name: 'bishesh', lastname: 'bhavshar', Address: 'nn', mobilenumber: '96565654253' ,age:16 },
  { id: '4', name: 'keval', lastname: 'bhavshar', Address: 'usa', mobilenumber: '96565654253' ,age:22 },
  { id: '5', name: 'dhruv', lastname: 'bhavshar', Address: 'modakeralasa', mobilenumber: '96565654253',age:22  },
  { id: '6', name: 'bhavesh', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253',age:22  },
  { id: '7', name: 'gourang', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' ,age:24 },
  { id: '8', name: 'jaimin', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' ,age:22 },
  { id: '9', name: 'yash', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' ,age:31 },
  { id: '10', name: 'rahul', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' ,age:22 },
  { id: '11', name: 'smit', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253',age:22  },
  { id: '12', name: 'aman', lastname: 'bhavshar', Address: 'surat', mobilenumber: '96565654253',age:44  },
  { id: '13', name: 'bishesh', lastname: 'bhavshar', Address: 'nn', mobilenumber: '96565654253' ,age:22 },
  { id: '14', name: 'keval', lastname: 'bhavshar', Address: 'usa', mobilenumber: '96565654253' ,age:22 },
  { id: '15', name: 'dhruv', lastname: 'bhavshar', Address: 'modakeralasa', mobilenumber: '96565654253',age:22  },
  { id: '16', name: 'bhavesh', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' ,age:25 },
  { id: '17', name: 'gourang', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' ,age:22 },
  { id: '18', name: 'jaimin', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' ,age:22 },
  { id: '19', name: 'yash', lastname: 'bhavshar', Address: 'modasa', mobilenumber: '96565654253' ,age:30 }
];
  ColDef:any[] = [
    { field: 'id' },
    {
      headerName: "Full name",
      valueGetter: (f: ValueGetterParams) => f.data.name + "  " + f.data.lastname,
      // rowGroup:true
    },
    { field: 'Address', filter: true,  editable: true,cellEditor: "agLargeTextCellEditor",cellEditorPopup: true,
            cellEditorParams: {
              rows: 15,
              cols: 50,
            } as ILargeTextEditorParams,
    },
    { field: 'mobilenumber', editable: true, },
    { field: 'Action', cellRenderer:ButtonComponent , cellStyle: { overflow: 'visible' },filter:true},
    { field: 'Select',   headerName: "Country", cellRenderer: ButtonComponent},
    { field: 'Checkbox', cellRenderer:ButtonComponent ,filter:'agNumberColumnFilter',
      filterParams: {
        filterOptions: ['equals', 'greaterThan', 'lessThan', 'notEqual', 'inRange'],
    }
    },
    { field:'age', 

      filter:'agNumberColumnFilter',
      filterParams: {
      filterPlaceholder: 'Age...',
      buttons: ["reset", "apply"],
      filterOptions: ['equals', 'greaterThan', 'lessThan', 'notEqual', 'inRange']
    }
  }
  ];
  


}