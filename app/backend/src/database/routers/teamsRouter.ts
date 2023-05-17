import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/teamsController';

const teamsRouter = Router();
const teamsController = new TeamsController();

teamsRouter.get('/', (req: Request, res: Response) => teamsController.getAllTeams(req, res));

export default teamsRouter;
