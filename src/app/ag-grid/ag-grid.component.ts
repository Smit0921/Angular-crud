import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, Input, viewChild,  } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, GridApi, GridReadyEvent, RowSelectionOptions, ValueGetterParams } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry,UndoEndedEvent,RedoEndedEvent,UndoRedoEditModule, themeQuartz} from 'ag-grid-community';
import { RowGroupingModule, RowGroupingPanelModule} from 'ag-grid-enterprise'; 



 
ModuleRegistry.registerModules([
  AllCommunityModule,
  RowGroupingPanelModule,
  RowGroupingModule
  
]);
@Component({
  selector: 'app-ag-grid',
  imports: [AgGridAngular,FormsModule,],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})

export class AgGridComponent {
  accessAgGrid: any = viewChild<ElementRef>('gridsearch')
@Input() rowData: any[] = [];
@Input() colDefs: any[] = [];
groupDefaultExpanded = 1;
filterText:string='';
http=inject(HttpClient)


  defaultColDef: ColDef = {
    flex: 1,
  };
  rowSelection: RowSelectionOptions | 'single' | 'multiple' = {
    mode: 'multiRow',
    headerCheckbox: false
  }
  undoRedoCellEditingLimit = 5;
  paginationPageSize = 10;
  paginationPageSizeSelector: number[] | boolean = [10, 25, 50];
  gridApi: any;

 applyFilter(){
  if(this.accessAgGrid){
    this.accessAgGrid.setGridOption('quickFilterText',this.filterText)
  }
 }
  onGridReady(params: GridReadyEvent) {
    this.accessAgGrid = params.api;
   
  }
  onExportCsv() {
    this.gridApi.exportDataAsCsv();
  }



}
