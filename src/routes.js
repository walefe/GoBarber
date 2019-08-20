import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'walefe',
    email: 'walefe@rocketseat.com',
    password_hash: '123456789',
  });
  return res.json(user);
});

export default routes;
