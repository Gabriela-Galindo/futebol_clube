import { Router } from 'express';
import LoginController from '../controllers/loginController';
import loginValidation from '../middleware/loginValidation';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', loginValidation, loginController.loginFunction);

export default loginRouter;
