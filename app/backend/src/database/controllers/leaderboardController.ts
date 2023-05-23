import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

class LeaderboardController {
  leaderboardService : LeaderboardService;

  constructor(leaderboardService = new LeaderboardService()) {
    this.leaderboardService = leaderboardService;
    this.hometeamLeaderboard = this.hometeamLeaderboard.bind(this);
  }

  hometeamLeaderboard = async (_req: Request, res: Response) => {
    const hometeamLeaderboard = await this.leaderboardService.hometeamLeaderboard();
    return res.status(200).json(hometeamLeaderboard);
  };
}

export default LeaderboardController;
