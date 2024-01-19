import path from 'node:path';
import { Router } from 'express';
import root from '../utils/root.js';
import { products } from './admin.js';

const route = Router();

route.get('/my-listing', (req, res, next) => {
  res.send(`<h1> Listing Items </h1>`);
});

route.get('/', (req, res, next) => {
  console.log('display.js', products);
  res.render('shop');
});

export default route;
