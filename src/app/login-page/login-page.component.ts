import { Component, inject, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule,FormBuilder, EmailValidator } from '@angular/forms';
import  {MatCardModule} from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { SelectDirective } from '../select.directive';



@Component({
  selector: 'app-login-page',
  imports: [RouterOutlet,MatButtonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatSlideToggleModule,FormsModule,MatCardModule,RouterLink,MatSnackBarModule,SelectDirective],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginform:FormGroup;
  errorMessage: string = '';
  display:boolean=false;
  _fb=inject(FormBuilder)
  snackbar=inject(MatSnackBar)
  
  constructor( private router:Router){
    this.loginform=this._fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
function loginUser(success:boolean) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Login successful");
    } else {
      reject("Wrong password");
    }
  });
}

loginUser(true)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

  }

  onSubmit() {
    if (this.loginform.valid) {
      const {email,password} =this.loginform.value;
      const users=JSON.parse(localStorage.getItem('userinfo') || '[]' );

      const matchUser= users.find((user:any) => user.email===email && user.password===password);
      if (matchUser){
        localStorage.setItem('isLoggedIn','true');
        console.log('logged in');
        // debugger;
        this.router.navigate(['/home']);
      }else{
          this.snackbar.open('Invalid Email or Password','close',{duration:3000});
      }
       
      // localStorage.setItem('userData', JSON.stringify(this.loginform.value));
     
      // console.log("Login Data:", this.loginform.value);
    }
  }
  displayContent(){
    this.display=true;
  }
}
