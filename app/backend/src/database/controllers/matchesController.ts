import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

class MatchesController {
  matchesService: MatchesService;

  constructor(matchesService = new MatchesService()) {
    this.matchesService = matchesService;
    this.getAllMatches = this.getAllMatches.bind(this);
  }

  getAllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const allMatches = await this.matchesService.getAllMatches(inProgress);
    return res.status(200).json(allMatches);
  };
}

export default MatchesController;
