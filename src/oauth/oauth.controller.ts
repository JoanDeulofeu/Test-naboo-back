import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Get()
  getTokens(@Req() request: Request): Promise<any> {
    return this.oauthService.getTokens(request);
  }

  @Post()
  createAccount(@Body() credentials): Promise<any> {
    return this.oauthService.createAccount(credentials);
  }
}
