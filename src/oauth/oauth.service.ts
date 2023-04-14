import { Injectable } from '@nestjs/common';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { users } from '../models';

const createUser = async (credentials, uid) =>
  new users({
    id: uid,
    email: credentials.email,
    firstName: credentials.firstName,
    lastName: credentials.lastName,
  }).save();

@Injectable()
export class OauthService {
  createAccount(credentials): Promise<any> {
    return createUserWithEmailAndPassword(
      getAuth(),
      credentials.email,
      credentials.password,
    )
      .then((data: any) => {
        const { refreshToken, accessToken, uid } = data.user;

        return createUser(credentials, uid)
          .then(
            () =>
              new Promise((resolve) =>
                resolve({ refreshToken, userId: uid, accessToken }),
              ),
          )
          .catch((error) => new Promise((resolve, reject) => reject(error)));
      })
      .catch((error) => {
        return new Promise((resolve, reject) => reject(error));
      });
  }

  /**
   * Create an object contains access & refresh token
   * Need get mail & password user
   */
  getTokens(req): Promise<any> {
    const auth = getAuth();

    const { email, password } = req.query;

    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        return new Promise((resolve) =>
          resolve({
            userId: userCredential.user.uid,
            accessToken: userCredential.user.stsTokenManager.accessToken,
            refreshToken: userCredential.user.stsTokenManager.refreshToken,
          }),
        );
      })
      .catch((err) => {
        if (
          err.code === 'auth/user-not-found' ||
          err.code === 'auth/wrong-password'
        ) {
          return new Promise((resolve, reject) =>
            reject('Connection failed! Credentials not valid.'),
          );
        } else if (err.code === 'auth/too-many-requests') {
          return new Promise((resolve, reject) =>
            reject(
              'Connection failed! Too many connection attempts, retry later.',
            ),
          );
        } else {
          return new Promise((resolve, reject) => reject('Connection failed!'));
        }
      });
  }
}
