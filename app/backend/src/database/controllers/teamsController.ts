import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';

class TeamsController {
  teamsService: TeamsService;

  constructor(teamsService = new TeamsService()) {
    this.teamsService = teamsService;
    this.getAllTeams = this.getAllTeams.bind(this);
  }

  getAllTeams = async (_req: Request, res: Response) => {
    const allTeams = await this.teamsService.getAllTeams();
    return res.status(200).json(allTeams);
  };
}

export default TeamsController;
