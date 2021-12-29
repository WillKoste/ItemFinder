import 'reflect-metadata';
import 'dotenv-safe/config';
import 'colors';
import path from 'path';
import express from 'express';
import {connectDB} from './config/pg';
import session from 'express-session';
import morgan from 'morgan';
import cors from 'cors';
import connectRedis from 'connect-redis';
import {redis} from './config/redis';
import cookiesMiddleware from 'universal-cookie-express';

import userRoutes from './routes/user';
import reviewsRoutes from './routes/reviews';
import productsRoutes from './routes/products';
import partnersRoutes from './routes/partners';
import locationsRoutes from './routes/locations';
import contactsRoutes from './routes/contacts';
import productsHistoryRoutes from './routes/productsHistory';
import categoriesRoutes from './routes/categories';
import favoritesRoutes from './routes/favorites';

connectDB();
const RedisStore = connectRedis(session);
const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(cors({origin: [process.env.CORS_ORIGIN], credentials: true}));
app.use(cookiesMiddleware());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		name: process.env.COOKIE_NAME,
		store: new RedisStore({client: redis, disableTouch: true}),
		cookie: {
			secure: true,
			sameSite: 'none',
			httpOnly: true
		},
		saveUninitialized: false,
		resave: false
	})
);

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/reviews', reviewsRoutes);
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/productHistory', productsHistoryRoutes);
app.use('/api/v1/partners', partnersRoutes);
app.use('/api/v1/locations', locationsRoutes);
app.use('/api/v1/contacts', contactsRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/favorites', favoritesRoutes);

app.use('/api/v1/public', express.static(path.join(__dirname, 'public', 'images')));
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../', '../', 'client', 'build')));
	app.get('*', (_, res) => {
		res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5001;
const mode = process.env.NODE_ENV || 'DEFAULT';

// app.listen(port, () => {
// 	console.log(`Express server running on port ${port}, in ${mode} mode`.cyan.underline.bold);
// });

import https from 'https';
import fs from 'fs';

https.createServer({key: fs.readFileSync(path.join(__dirname, '../', './server.key')), cert: fs.readFileSync(path.join(__dirname, '../', './server.cert'))}, app).listen(port, () => {
	console.log(`Express server running on port ${port}, in ${mode} mode`.cyan.underline.bold);
});
