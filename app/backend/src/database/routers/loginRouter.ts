import { Router, Request, Response } from 'express';
import LoginController from '../controllers/loginController';
import loginValidation from '../middleware/loginValidation';
import tokenValidation from '../middleware/tokenValidation';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', loginValidation, loginController.loginFunction);
loginRouter.get('/role', tokenValidation, (req: Request, res: Response) =>
  loginController.getRole(req, res));

export default loginRouter;
