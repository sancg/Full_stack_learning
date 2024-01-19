import { Router } from 'express';
import { products } from './admin.js';

const route = Router();

route.get('/my-listing', (req, res, next) => {
  res.send(`<h1> Listing Items </h1>`);
});

route.get('/', (req, res, next) => {
  res.render('shop', { prods: products, title: 'Shop' });
});

export default route;
