import { Request, Response, NextFunction } from 'express';

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const numberSix = 6;
  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });
  if (!emailReg.test(email) || password.length < numberSix) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default loginValidation;
