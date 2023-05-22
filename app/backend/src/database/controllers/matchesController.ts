import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

class MatchesController {
  matchesService: MatchesService;

  constructor(matchesService = new MatchesService()) {
    this.matchesService = matchesService;
    this.getAllMatches = this.getAllMatches.bind(this);
    this.finishMatches = this.finishMatches.bind(this);
    this.updateMatches = this.updateMatches.bind(this);
  }

  getAllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const allMatches = await this.matchesService.getAllMatches(inProgress);
    return res.status(200).json(allMatches);
  };

  finishMatches = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchesService.finishMatches(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };

  updateMatches = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchesService.updateMatches(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Match updated' });
  };
}

export default MatchesController;
