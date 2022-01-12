import {Request, Response, NextFunction} from 'express';

export const searchQueries = (req: Request, res: Response, next: NextFunction) => {
	let queryArr: String[] = [];
	let queryStr = ``;
	const keysArr = Object.keys(req.query);
	const queryCount = keysArr.map((a, i) => `$${i + 1}`);
	if (keysArr.includes('search_q')) {
		queryArr.push(`hi`);
	}
	console.log({keysArr, queryCount, queryStr, queryArr});
	next();
};
