import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/matchesController';
import tokenValidation from '../middleware/tokenValidation';
import matchValidation from '../middleware/matchValidation';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchesController.getAllMatches(req, res));
matchesRouter.patch(
  '/:id',
  tokenValidation,
  (req: Request, res: Response) => matchesController.updateMatches(req, res),
);
matchesRouter.patch(
  '/:id/finish',
  tokenValidation,
  (req: Request, res: Response) => matchesController.finishMatches(req, res),
);
matchesRouter.post(
  '/',
  tokenValidation,
  matchValidation,
  (req: Request, res: Response) => matchesController.insertMatch(req, res),
);

export default matchesRouter;
