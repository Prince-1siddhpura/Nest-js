import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com'
    }
  ] 
  getUsers() {
    return this.users;
  }
  getUserCount(){
    return this.users.length;
  } 
}
