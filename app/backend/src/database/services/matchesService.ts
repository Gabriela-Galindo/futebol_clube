import MatchesModel from '../models/MatchesModel';
import TeamsModel from '../models/TeamsModel';
import { Matches } from '../interfaces/matchesInterface';

class MatchesService {
  model = MatchesModel;

  constructor() {
    this.model = MatchesModel;
  }

  async getAllMatches(inProgress: unknown): Promise<Matches[]> {
    const allMatches = await this.model.findAll({ include: [{
      model: TeamsModel,
      as: 'homeTeam',
      attributes: ['teamName'],
    }, {
      model: TeamsModel,
      as: 'awayTeam',
      attributes: ['teamName'],
    }] });
    if (inProgress === 'true') {
      return allMatches.filter((match) => match.inProgress === true);
    }
    if (inProgress === 'false') {
      return allMatches.filter((match) => match.inProgress === false);
    }
    return allMatches;
  }
}

export default MatchesService;
