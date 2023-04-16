import { Injectable } from '@nestjs/common';

import { cities } from '../models';

@Injectable()
export class CitiesService {
  async getCities(): Promise<any> {
    const allCities = await cities
      .find(
        {},
        {
          _id: 0,
          __v: 0,
        },
      )
      .lean()
      .exec();

    // We add Paris & Lyon manually to make sure she is at the top of the list
    return new Promise((resolve) =>
      resolve([
        'paris',
        'lyon',
        ...allCities
          .map((c) => c.name)
          .filter((c) => c !== 'paris' && c !== 'lyon'),
      ]),
    );
  }
}
