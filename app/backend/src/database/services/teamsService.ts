import TeamsModel from '../models/TeamsModel';
import { Teams } from '../interfaces/teamsInterface';

class TeamsService {
  model = TeamsModel;

  constructor() {
    this.model = TeamsModel;
  }

  async getAllTeams(): Promise<Teams[]> {
    const allTeams = await this.model.findAll();
    return allTeams;
  }
}

export default TeamsService;
