import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  getActivities(@Req() request: Request): Promise<any> {
    return this.activitiesService.getActivities(request);
  }

  @Post()
  createAccount(@Body() activity): Promise<any> {
    return this.activitiesService.createActivity(activity);
  }
}
