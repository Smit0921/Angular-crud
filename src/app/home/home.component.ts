// import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, LowerCasePipe, NgIf, UpperCasePipe } from '@angular/common';
import { MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { AfterViewInit, Component, effect, Input, signal, untracked, viewChild, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PopupComponent } from '../popup/popup.component';
import { DialogRef } from '@angular/cdk/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { userInfo } from 'node:os';
import { ClientComponent } from '../client/client.component';
import { Observable } from 'rxjs';
import { Subject,BehaviorSubject } from 'rxjs';
import { UserComponent } from '../user/user.component';
import { WhopPayoutComponent } from '../whop-payout/whop-payout.component';







@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatDialogModule, RouterOutlet, MatTableModule, MatIconModule, NgIf, FormsModule, ReactiveFormsModule, MatIcon, MatCardTitle, MatFormField, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule,
    UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit {
 
  // parentValue: string = '';
  // name: string = '';
  // message = "Hello Home";

  // receiveMessage(event:string) {
  //   this.message = event;
  // }
  // onNameChange(value: string) {
  //   console.log('Updated Name:', value);
  // }
  // ngAfterViewInit(): void {
  //   console.log("home ngAfterViewInit",performance.now())
  // }




  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'mobilenumber', 'email', 'password', 'repassword', 'actions',];

  username=signal<string>('smit')
  userinfo: any[] = [];
  originalData: any = [];
  searchText: string = '';
  currentDate:Date= new Date()
  amount:any='152365';
  Signal=signal<any>('smit')
  dashboardItems=signal<any>([
	  { id: 'dealClosed', name: 'AAAAAAA'},
    { id: 'contractedRevenue', name: 'BBBBBB'},
    { id: 'cashCollected', name: 'CCCCC'},
    { id: 'missedPayment', name: 'DDDD'},
    { id: 'upcommingPayments', name: 'EEE'},
    { id: 'refunds', name: 'FF'}
	])
items = ['AAAAAAA','BBBBBB','CCCCC','DDDD','EEE','Fdfg'];

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  firstname: any="smit";
  rows = signal<number[]>([]);

  numbers = signal<any>([]);

  ngOnInit() {
    // using set()
    
for(let i=1;i<=100;i++){
  if(i%3===0 && i%5===0){
    console.log('FizzBuzz');
  }
  else if(i%3===0){
    console.log('Fizz')
  }
  else if(i%5===0){
    console.log('Buzz')
  }
  else{
    console.log(i)
  }
}
    const items = ['AAAAAAA','BBBBBB','CCCCC','DDDD','EEE','F'];


items.forEach(item=>(console.log(item)))

    this.rows.set([1, 3, 5, 7, 9, 7, 5, 3, 1]);
    this.numbers.set(this.rows().map(count => Array.from({ length: count }, (_, i) => i + 1)
)
    );
  }
  ngAfterViewInit() {
    // debugger;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    for (let i = 1; i <= 9; i += 2) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j + '';
      }
      console.log(row);
    }
    for (let i = 7; i >= 1; i -= 2) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j + '';
      }
      console.log(row);
    }

    for(let i=1;i<=4;i++){
      let row=' '.repeat(4-i) + '*'.repeat(2*i-1)
      console.log(row)
    }
    for(let i=1;i<=100;i++){
      if(i%3===0 && i%5===0){
        console.log('FizzBuzz');
      } else if(i%3===0){
        console.log('Fizz')
      } else if(i%5===0){
        console.log('Buzz')
      } else{
        console.log(i)
      } 
}
  }

  constructor(private dialog: MatDialog) {
    setTimeout(() => {
      this.username.set('aman')
    }, 5000);
    this.loaduserData();
    const word = ['A', 'B', 'C', 'D', 'E', 'F']
    const count = [7, 6, 5, 4, 3, 2,1]
    console.log('word: ', this.dataSource);
    for (let i = 0; i < word.length; i++) {
      console.log('word[i]: ', word[i].repeat(count[i]));
    }

    effect(() => {
    const data=this.Signal()
    console.log('data: ', data);
    untracked(() =>{
      this.Signal.set('Smith')
    })
    })
    
  
  }
  loaduserData() {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo') || '[]');

    this.userinfo.forEach(user => (user.isEditing = false));
    this.dataSource.data = this.userinfo;

  }



  // editUser(user: any) {
  //   this.originalData[user.id] = { ...user };
  //   user.isEditing = true;
  // }

  saveUser(user: any) {
    user.isEditing = false;
    localStorage.setItem('userinfo', JSON.stringify(this.userinfo));
  }

 

    deleteUser(userId: number) {
      console.log('userIdsss: ', userId);
      const dialogRef = this.dialog.open(DeleteConfirmationComponent,
        {
          width: '250px'

        });
      dialogRef.afterClosed().subscribe(result => { //gets the return data after popup is close
        if (result) {
          this.userinfo = this.userinfo.filter(user => user.id !== userId);
          console.log('  this.usesssrinfo: ',   this.userinfo);
          localStorage.setItem('userinfo', JSON.stringify(this.userinfo));
          this.dataSource.data = [...this.userinfo];
        }
      });
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    editUser(user: any){
      console.log('user: ', user);
      
      const dialogRef = this.dialog.open(PopupComponent, {
        width: '40%',
        data: { ...user }
      });
      dialogRef.afterClosed().subscribe(updatedUser => {
      
        if (updatedUser) {
          const index = this.userinfo.findIndex(u => u.id === updatedUser.id);
          if (index !== -1) {
            this.userinfo[index] = { ...updatedUser };
            localStorage.setItem('userinfo', JSON.stringify(this.userinfo));
            this.dataSource.data = [...this.userinfo];
          }
        }
      });
    }
    openpopup() {
      const dialogRef = this.dialog.open(PopupComponent, {
        width: '40%',
        data: {}
      });

      dialogRef.afterClosed().subscribe(newUser => {
        console.log('newUser: ', newUser);
        if (newUser) {
          newUser.id = this.userinfo.length + 1;
          this.userinfo.push(newUser);
          localStorage.setItem('userinfo', JSON.stringify(this.userinfo));
          this.dataSource.data = [...this.userinfo];
        }
      });
    }

    openWhopPayout() {
      const dialogRef = this.dialog.open(WhopPayoutComponent, {
        width: '80%',
        maxWidth: '800px',
        height: '80%',
        disableClose: false
      });
    }

  }

