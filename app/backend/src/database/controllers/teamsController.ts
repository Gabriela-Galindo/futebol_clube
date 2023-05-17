import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';

class TeamsController {
  teamsService: TeamsService;

  constructor(teamsService = new TeamsService()) {
    this.teamsService = teamsService;
    this.getAllTeams = this.getAllTeams.bind(this);
    this.getTeamById = this.getTeamById.bind(this);
  }

  getAllTeams = async (_req: Request, res: Response) => {
    const allTeams = await this.teamsService.getAllTeams();
    return res.status(200).json(allTeams);
  };

  getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this.teamsService.getTeamById(Number(id));
    return res.status(200).json(team);
  };
}

export default TeamsController;
