import path from 'node:path';
import express from 'express';
import bps from 'body-parser';

import display from './route/display.js';
import { admin } from './route/admin.js';
import root from './utils/root.js';

const app = express();
const port = 3000;

app.set('x-powered-by', false);

// Adding a global configuration value | Ref: https://expressjs.com/en/5x/api.html#app.set
app.set('view engine', 'pug');
app.set('views', ['views', 'views/pug', 'views/ejs']);
app.use(express.static(path.join(root, 'public')));

app.use(bps.urlencoded({ extended: false }));

app.use(display);
app.use('/admin', admin);

app.use((req, res) => {
  res.status(404).send('<h1> Page Not Found </h1>');
});

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
