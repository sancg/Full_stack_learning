import path from 'node:path';

import { Router } from 'express';
import root from '../utils/root.js';
const route = Router();

route.get('/users', (req, res) => {
  res.sendFile(path.join(root, 'templates', 'users.html'));
});

route.get('/add-list', (req, res) => {
  res.send(
    `<form action="/my-listing" method="POST"><input type="text" name="kpop_band"><button type="submit">SEND</button></form>`
  );
});

route.post('/my-listing', (req, res, next) => {
  console.log({ data: req.body, params: req.params });
  res.redirect('/');
});

export default route;
