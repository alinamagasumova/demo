import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/index.js';
import authRouter from './routes/auth.routes.js';
import apiRouter from './routes/api.routes.js';
import { engine } from 'express-handlebars';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/', router);
app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.listen(process.env.PORT, () => console.log('Server has started on port ', process.env.PORT));
