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

  async getTeamById(id: number): Promise<Teams | null> {
    const team = await this.model.findByPk(id);
    return team;
  }
}

export default TeamsService;
