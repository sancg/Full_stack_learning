import { User } from '../modules/user.js';

export const postRegisterUsers = (req, res, next) => {
  const { name, last_name } = req.body;
  const user = new User(name, last_name);
  user.save();

  res.redirect('/users');
};

export const getUsers = (req, res) => {
  res.render('users', { titlePage: 'View Users', users: User.fetchAll(), path: '/users' });
};
