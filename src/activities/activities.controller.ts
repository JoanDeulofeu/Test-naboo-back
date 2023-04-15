import { Body, Controller, Post } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  createAccount(@Body() activity): Promise<any> {
    return this.activitiesService.createActivity(activity);
  }
}
