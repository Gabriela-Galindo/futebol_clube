import { Secret, sign, SignOptions } from 'jsonwebtoken';

const secretKey: Secret = process.env.JWT_SECRET as string;

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (email: string): string => {
  const token = sign({ email }, secretKey, jwtConfig);
  return token;
};

export default generateToken;
