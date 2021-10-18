import {Pool, Client} from 'pg';
import 'colors';

const connectInfo = {
	database: process.env.PG_DATABASE,
	user: process.env.PG_USER,
	host: process.env.PG_HOST,
	port: +process.env.PG_PORT,
	password: process.env.PG_PASSWORD
};

export const connectDB = () => {
	const client = new Client(connectInfo);

	client.connect((err) => {
		if (err) {
			console.log({err});
			process.exit(1);
		} else {
			console.log(`Postgres database connected on port ${process.env.PG_PORT}`.magenta.bold);
		}
	});
};

export const pool = new Pool(connectInfo);
