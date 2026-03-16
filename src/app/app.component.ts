import { Component,OnInit,OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, SimpleChanges, InjectionToken} from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { ClientComponent } from "./client/client.component";
import { PipeComponent } from './pipe/pipe.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NgSelectModule } from '@ng-select/ng-select';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterLink,
    MatIconModule,FormsModule,NgSelectModule],
            
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: any; 
  userForms: FormGroup;
  name: string = '';
    selectedItems: any[] = [];

   categories = [
    {
      id: 1,
      name: 'Fruits',
      children: [
        { id: 11, name: 'Apple' },
        { id: 12, name: 'Banana' },
      ],
    },
    {
      id: 2,
      name: 'Vegetables',
      children: [
        { id: 21, name: 'Carrot' },
        { id: 22, name: 'Broccoli' },
      ],
    },
    {
      id: 3,
      name: 'BreakFast',
      children: [
        { id: 31, name: 'Poha' },
        { id: 92, name: 'Chai&Biscuit' },
      ],
    },
  ];

 
  constructor(private router:Router){
    this.userForms = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      
      hobbies:new FormGroup({
        is_frontend: new FormControl([]),
        is_backend: new FormControl([]),
        is_other: new FormControl([])
      }),
      city: new FormControl('')
    });
  }
  toggleSelection(itemId: number) {
  const index = this.selectedItems.indexOf(itemId);
  if (index > -1) {
    this.selectedItems.splice(index, 1);
  } else {
    this.selectedItems.push(itemId);
  }
}

    getFlattenedItems() {
    const items: any[] = [];
    this.categories.forEach((cat) => {
      items.push({ id: cat.id, name: cat.name, isParent: true });
      cat.children?.forEach((child) => {
        items.push({ ...child, parentId: cat.id });
      });
    });
    return items;
  }
  
  onSubmit() {
  }
   
  navigateToHome(){
    this.router.navigateByUrl("home");
  }

  navigateToUser(){
    this.router.navigateByUrl("user");
  }
  navigateToClient(){
    this.router.navigateByUrl("client");
  }
  navigateToLogin(){
    this.router.navigateByUrl('login');
  }
  navigateTopipe(){
    this.router.navigateByUrl('/whop');
  }
  
  navigateToPaypal(){
    this.router.navigateByUrl('/paypal');
  }
  
  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData'); 
    this.router.navigate(['/login']); // Redirect to login page
  }
  
}
