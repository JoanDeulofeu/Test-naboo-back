import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OauthModule } from './oauth/oauth.module';
import { ActivitiesModule } from './activities/activities.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [UsersModule, OauthModule, ActivitiesModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
