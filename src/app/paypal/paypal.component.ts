import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-paypal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paypal.component.html'
})
export class PaypalComponent {

 users: User[] = [];
  newUserName = '';

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    const data = localStorage.getItem('users');
    this.users = data ? JSON.parse(data) : [];
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // CREATE
  addUser(index: number) {

    const name = this.newUserName.trim();
    if (!name) return;

    const user: User = {
      id: index +1,
      name: name
    };

    this.users.push(user);

    this.saveUsers();

    this.newUserName = '';
  }

  // UPDATE
  editUser(user: User) {

    const newName = prompt('Edit name', user.name);

    if (newName && newName.trim()) {
      user.name = newName.trim();
      this.saveUsers();
    }

  }

  // DELETE
  deleteUser(id: number) {
    console.log('id: ', id);

   const updatedUsers = this.users.filter(user => user.id !== id);
   console.log('updatedUsers: ', updatedUsers);
    this.users = updatedUsers;
    this.saveUsers();

  }

}