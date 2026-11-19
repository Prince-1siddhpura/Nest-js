import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get('profile')
  getProfile() {
    return {
      status: true,
      message: 'This action returns the profile of a user',
    };
  }
  @Get('count')
  getUserCount(){
    return this.userService.getUserCount();
  }

}
