import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule,FormBuilder, EmailValidator, AbstractControl } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { passwordMatch } from '../validators/password-match.validator';
import { __values } from 'tslib';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-signup',
  imports: [MatDatepickerModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,MatSlideToggleModule,ReactiveFormsModule,RouterOutlet,MatFormField,FormsModule,RouterLink,NgClass,NgIf,MatIconModule,MatIcon,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    
  signupform: FormGroup;
  _fb=inject(FormBuilder)
    
   mobileregix = /^(\+\d{1,3}[- ]?)?\d{10}$/;
   emailRegix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
 
  
  constructor(private router:Router){
    this.signupform=this._fb.group({
     

      firstname:['',[Validators.required,Validators.maxLength(20)]],
      lastname:['',[Validators.required,Validators.maxLength(20)]],
      mobilenumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.mobileregix)]],
      email:['',[Validators.required,Validators.email,Validators.pattern(this.emailRegix)]],
     
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      repassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]
    }, { validators: passwordMatch('password', 'repassword') }
    
  ); 
 
  

  }
  getControl(name:any): AbstractControl | null{
    return this.signupform.get(name)
  }

  Register() {
 
    if (this.signupform.valid) {
      let users = JSON.parse(localStorage.getItem('userinfo') || '[]');


     
      let nextId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
   

      let newUser = {
        id: nextId,  
        ...this.signupform.value
      };

      users.push(newUser);
      localStorage.setItem('userinfo', JSON.stringify(users));
      this.router.navigate(['/login']);
    }
  }
  
}
