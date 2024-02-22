import bpr from 'body-parser';
import express from 'express';
import path from 'node:path';
import userRoute from './routes/users.js';
import { error404 } from './controllers/on404.js';

const app = express();
const PORT = 3000;

app.set('x-powered-by', false);
app.set('view engine', 'ejs');

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bpr.urlencoded({ extended: false }));
// console.log(path.join(process.cwd(), 'public'));

app.get('/', (req, res, next) => {
  res.render('index', { titlePage: 'Home: Add user', path: '/' });
});

app.use(userRoute);

app.use(error404);

app.listen(PORT, () => {
  console.log(`App running -> http://localhost:${PORT}/`);
});
