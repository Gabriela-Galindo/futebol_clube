import UsersModel from '../models/UsersModel';
import { Users } from '../interfaces/usersInterface';

class LoginService {
  model = UsersModel;

  constructor() {
    this.model = UsersModel;
  }

  async loginFunction(email: string): Promise<UsersModel | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

  async getRole(email: string): Promise<Users | null> {
    const user = await this.model.findOne({ where: { email } });
    console.log(email, 'email do service');
    return user;
  }
}

export default LoginService;
