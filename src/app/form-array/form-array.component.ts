import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import {  MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-form-array',
  imports: [CommonModule,FormsModule, ReactiveFormsModule,MatLabel, MatInputModule, MatCardContent,MatFormFieldModule,MatSelectModule,MatCard,MatIcon,MatIconModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent implements OnInit{
  form: FormGroup;
  msgservice=inject(MessageService);
  cdRef=inject(ChangeDetectorRef)
  message: string='';

 
  constructor(private fb: FormBuilder) {
   
    this.form = this.fb.group({
      role: [''], 
      skills: this.fb.array([]) 
    });
  }
 

  ngOnInit() {
    this.msgservice.message$.subscribe((msg) => {
      console.log(">>",msg)
      this.message = msg;
      this.cdRef.detectChanges(); 
    });
  }
  

  get skills(): any {
    return this.form.get('skills') as FormArray;
  }


  addSkill(){
    const skillGroup=this.fb.group({
      skill:[''],
      experience:[''],
      
    })
    this.skills.push(skillGroup)
  }
  removeSkill() {
    this.skills.removeAt();

  }

  onSubmit() {
    console.log(this.form.value);
  }
 
}