import { Router } from 'express';
import { FestivalsController } from '../controllers/festivals.controller.js';
import { authorized } from '../interceptors/authorized.js';
import { logged } from '../interceptors/logged.js';

import { FestivalsMongoRepo } from '../repository/festivals.mongo.repo.js';
import { UsersMongoRepo } from '../repository/users.mongo.repo.js';

// eslint-disable-next-line new-cap
export const festivalsRouter = Router();

const repoUsers = new UsersMongoRepo();
const repoFestivals = new FestivalsMongoRepo();
const festivalController = new FestivalsController(repoUsers, repoFestivals);

festivalsRouter.get('/', festivalController.getAll.bind(festivalController));
festivalsRouter.get('/:id', festivalController.get.bind(festivalController));
festivalsRouter.post(
  '/',
  logged,
  festivalController.post.bind(festivalController)
);
festivalsRouter.patch(
  '/edit:id',
  logged,
  (req, resp, next) => authorized(req, resp, next, repoFestivals),
  festivalController.patch.bind(festivalController)
);
festivalsRouter.delete(
  '/:id',
  logged,
  (req, resp, next) => authorized(req, resp, next, repoFestivals),
  festivalController.delete.bind(festivalController)
);
festivalsRouter.get(
  '/musicType/:musicTypeFilter',
  festivalController.filterMusic.bind(festivalController)
);
