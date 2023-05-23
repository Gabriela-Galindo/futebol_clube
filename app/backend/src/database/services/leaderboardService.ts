import sequelize from '../models';
import { Leaderboard } from '../interfaces/leaderboardInterface';
import leaderboardQuery from '../utils/leaderboardQuery';

class LeaderboardService {
  model = sequelize;

  constructor() {
    this.model = sequelize;
  }

  async hometeamLeaderboard(): Promise<Leaderboard[]> {
    const [leaderboard] = await this.model.query(leaderboardQuery);
    return leaderboard as Leaderboard[];
  }
}

export default LeaderboardService;
