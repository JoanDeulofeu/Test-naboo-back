import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // ----- LOG to test. Remove it ! -----
    console.log('ENDPOINT CALLED !!!!');
    return 'Hello World!';
  }
}
