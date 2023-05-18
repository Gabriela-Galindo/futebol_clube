import MatchesModel from '../models/MatchesModel';
import TeamsModel from '../models/TeamsModel';
import { Matches } from '../interfaces/matchesInterface';

class MatchesService {
  model = MatchesModel;

  constructor() {
    this.model = MatchesModel;
  }

  async getAllMatches(): Promise<Matches[]> {
    const allMatches = await this.model.findAll({ include: [{
      model: TeamsModel,
      as: 'homeTeam',
      attributes: ['teamName'],
    }, {
      model: TeamsModel,
      as: 'awayTeam',
      attributes: ['teamName'],
    }] });
    return allMatches;
  }
}

export default MatchesService;
