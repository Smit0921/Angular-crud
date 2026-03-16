import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

@Component({
    standalone: true,
    imports:[FormsModule,CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './button.component.html',
})


export class ButtonComponent implements ICellRendererAngularComp{

    params: any;
 
    
    countries = [
        { flag: 'us', name: 'United States' },
        { flag: 'in', name: 'India' },
        { flag: 'gb', name: 'United Kingdom' },
        { flag: 'ca', name: 'Canada' },
        { flag: 'de', name: 'Germany' },
        { flag: 'fr', name: 'France' },
        { flag: 'jp', name: 'Japan' },
        { flag: 'cn', name: 'China' },
        { flag: 'br', name: 'Brazil' },
        { flag: 'za', name: 'South Africa' }
      ];


    agInit(params: ICellRendererParams): void {
        this.params = params;

      }
    onButtonClick() {
    }
    onButtonDElete(){
      this.params.data.deleteUser
    }
  onDropdownChange(event: any) {
    this.params.setValue(event.target.value);
  }

  onCheckboxChange(event: any) {
    this.params.setValue(event.target.checked);
  }
  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

}