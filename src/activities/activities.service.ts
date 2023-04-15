import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';
import { activities, cities } from '../models';

interface City {
  id: string;
  name: string;
}

@Injectable()
export class ActivitiesService {
  async createActivity(activity): Promise<any> {
    // Search if city already exists
    const citySearched = await cities
      .find(
        { name: activity.city.toLowerCase() },
        {
          _id: 0,
          __v: 0,
        },
      )
      .lean()
      .exec();

    // Set city object to get his id
    // and push it on the activity that we will create
    let city: City = { id: '', name: '' };
    if (citySearched.length < 1) {
      // Create city if it doesn't already exist'
      city = await new cities({
        id: v4(),
        name: activity.city.toLowerCase(),
      }).save();
    } else {
      city = { ...citySearched[0] };
    }

    // Create new activity
    const activityCreated = await new activities({
      id: v4(),
      userId: activity.userId,
      type: activity.type,
      cityId: city.id,
      price: activity.price,
      description: activity.description,
      club: activity.club,
    }).save();

    return new Promise((resolve) =>
      resolve({
        ...activityCreated.toObject(),
        city: city.name,
        _id: undefined,
        __v: undefined,
      }),
    );
  }
}
