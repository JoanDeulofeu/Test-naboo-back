import { Injectable } from '@nestjs/common';

import { users } from '../models';

@Injectable()
export class UsersService {
  getUserById(req): Promise<any> {
    const { id: userId } = req.query;

    return users
      .aggregate([{ $match: { id: userId } }])
      .exec()
      .then((users) => {
        if (users.length > 0) {
          return new Promise((resolve) =>
            resolve({ ...users[0], _id: undefined }),
          );
        } else {
          return new Promise((resolve, reject) =>
            reject({ message: 'User not found' }),
          );
        }
      })
      .catch(() => {
        return new Promise((resolve, reject) =>
          reject({ message: 'User not found' }),
        );
      });
  }
}
