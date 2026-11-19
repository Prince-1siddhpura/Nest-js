import {
  Controller,
  Get,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    return this.userService.getUserPage(page, limit);
  }

  @Get('search')
  getUsersNameSearch(
    @Query('name') name?: string,
    @Query('email') email?: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    return this.userService.getUserNameSearchinPage(name, email, page, limit);
  }

  @Get('profile')
  getProfile() {
    return {
      status: true,
      message: 'This action returns the profile of a user',
    };
  }

  @Get('count')
  getUserCount() {
    return this.userService.getUserCount();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Get(':profileid/order/:orderid')
  getProfileByOrderId(
    @Param('profileid') profileid: string,
    @Param('orderid') orderid: string,
  ) {
    return this.userService.getProfileByOrderId(profileid, orderid);
  }
}
