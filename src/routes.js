import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionContoller';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', uploads.single('file'), (req, res) => {
  return res.json({ ok: true });
});
export default routes;
