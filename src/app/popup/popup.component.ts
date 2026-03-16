import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, matDialogAnimations, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-popup',
  imports: [MatDialogModule, MatButtonModule,MatCardModule,MatFormField,MatIcon,MatLabel,MatError,MatFormField,MatSlideToggleModule,MatInputModule,ReactiveFormsModule,NgIf],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class PopupComponent {
  userForm:FormGroup;
  editData:any;
  mobileregix = /^[6-9]\d{9}$/;
  emailRegix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  constructor(
  @Optional() private dialogRef: MatDialogRef<PopupComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any  //pass data to the dialog
    

  ) {
    this.userForm = this.fb.group({
      id: [data?.id || null],
      firstname: [data?.firstname || '',[ Validators.required]],
      lastname: [data?.lastname || '', [Validators.required]],
      mobilenumber: [data?.mobilenumber || '', [Validators.required,Validators.minLength(10),Validators.pattern(this.mobileregix)]],
      email: [data?.email || '', [Validators.required, Validators.email,Validators.pattern(this.emailRegix)]],
      password: [data?.password|| '', [Validators.required]],
      repassword: [data?.repassword || '', [Validators.required]]
    });
  }
  
    saveUser() {  
      if (this.userForm.valid) {
        this.dialogRef.close({ ...this.data, ...this.userForm.value });
        console.log('this.data: ', this.data);
        console.log('userForm: ', this.userForm.value);
      } 
    }
    
  cancel() {
    this.dialogRef?.close();
 
  }
  
}