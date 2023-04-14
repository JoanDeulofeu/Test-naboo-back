import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUserById(@Req() request: Request): Promise<any> {
    return this.usersService.getUserById(request);
  }
}
