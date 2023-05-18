import { Secret, sign, SignOptions, verify } from 'jsonwebtoken';

const secretKey: Secret = process.env.JWT_SECRET as string;

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (email: string): string => {
  const token = sign({ email }, secretKey, jwtConfig);
  return token;
};

const validateToken = (token: string) => {
  const isValid = verify(token, secretKey);
  return isValid;
};

export default generateToken;
export { validateToken };
