import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUserById(id: string): Promise<any> {
    // ----- LOG to test. Remove it ! -----
    console.log('ENDPOINT CALLED getUserById !!!!');
    return new Promise((resolve) => resolve({ id }));
  }
}
