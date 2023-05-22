import { Request, Response, NextFunction } from 'express';
import MatchesModel from '../models/MatchesModel';

const matchValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  const homeTeam = await MatchesModel.findByPk(homeTeamId);
  const awayTeam = await MatchesModel.findByPk(awayTeamId);

  if (!homeTeam || !awayTeam) {
    return res.status(404)
      .json({ message: 'There is no team with such id!' });
  }
  next();
};

export default matchValidation;
