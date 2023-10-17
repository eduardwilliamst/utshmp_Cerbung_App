import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  usersData: any[] = [
    {
      email: "user1@gmail.com",
      username: "User 1",
      password: "123",
    },
    ]
  constructor() { }

  addUser(user: any) {
    this.usersData.push(user);
  }
  
  getUsers() {
    return this.usersData;
  }
}
