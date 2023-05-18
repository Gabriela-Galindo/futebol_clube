import UsersModel from '../models/UsersModel';

class LoginService {
  model = UsersModel;

  constructor() {
    this.model = UsersModel;
  }

  async loginFunction(email: string): Promise<UsersModel | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }
}

export default LoginService;
