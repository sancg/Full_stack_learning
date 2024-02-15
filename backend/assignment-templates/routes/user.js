import { Router } from 'express';

const users = [];
const userRoute = Router();

userRoute.post('/register-user', (req, res, next) => {
  const { name, last_name } = req.body;
  users.push({ name, last_name });
  res.redirect('/users');
});

userRoute.get('/users', (req, res) => {
  res.render('users', { titlePage: 'View Users', users });
});

export default userRoute;
