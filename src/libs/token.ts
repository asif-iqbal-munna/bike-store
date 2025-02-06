/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import { IUser } from '../modules/user/user.interface';
import { SignOptions } from 'jsonwebtoken';

export function signToken(
  jwtPayload: Partial<IUser>,
  secret: string,
  expiresIn: SignOptions['expiresIn'],
) {
  const options: SignOptions = {
    expiresIn: expiresIn as SignOptions['expiresIn'],
  };
  const token = jwt.sign(jwtPayload, secret, options);
  return token;
}

export function verifyToken(token: string, secret: string) {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    };
  }
}
