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

  async finishMatches(id: number): Promise<void> {
    const match = await this.model.findByPk(id);
    await match?.update({ inProgress: false });
  }

  async updateMatches(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void> {
    const match = await this.model.findByPk(id);
    await match?.update({ homeTeamGoals, awayTeamGoals });
  }

  async insertMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ):
    Promise<Matches> {
    const newMatch = await this.model.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return newMatch;
  }
}

export default MatchesService;
