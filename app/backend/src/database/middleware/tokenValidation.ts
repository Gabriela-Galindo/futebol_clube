import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/token';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const validToken = validateToken(authorization);
    res.locals.validToken = validToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenValidation;
