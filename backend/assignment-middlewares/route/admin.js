import path from 'node:path';

import { Router } from 'express';
import root from '../utils/root.js';
const admin = Router();

const products = [];

admin.get('/users', (req, res) => {
  res.sendFile(path.join(root, 'templates', 'users.html'));
});

admin.get('/add-list', (req, res) => {
  res.send(
    `<form action="/my-listing" method="POST"><input type="text" name="kpop_band"><button type="submit">SEND</button></form>`
  );
});

admin.post('/my-listing', (req, res, next) => {
  console.log({ data: req.body, params: req.params });
  res.redirect('/');
});

export { admin, products };
