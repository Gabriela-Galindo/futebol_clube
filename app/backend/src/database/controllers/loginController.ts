import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import LoginService from '../services/loginService';
import generateToken from '../utils/token';

class LoginController {
  loginService: LoginService;

  constructor(loginService = new LoginService()) {
    this.loginService = loginService;
    this.loginFunction = this.loginFunction.bind(this);
    this.getRole = this.getRole.bind(this);
  }

  loginFunction = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await this.loginService.loginFunction(email);
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const validatePassword = bcrypt.compareSync(password, user.password);
    if (!validatePassword) return res.status(401).json({ message: 'Invalid email or password' });

    const token = generateToken(email);
    return res.status(200).json({ token });
  };

  getRole = async (req: Request, res: Response) => {
    const { email } = res.locals.validToken;
    const user = await this.loginService.getRole(email);
    if (!user) return res.status(401).json({ message: 'Invalid email' });
    const { role } = user;
    return res.status(200).json({ role });
  };
}

export default LoginController;
