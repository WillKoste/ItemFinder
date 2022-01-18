import {Request, Response, NextFunction} from 'express';

// interface QueryFormat {
// 	queryKey: string;
// 	queryVal: string;
// }

export const searchQueries = (req: Request, _: Response, next: NextFunction) => {
	let queryArr: String[] = [];
	let valueIndex = 1;
	let valueArray = [];
	const keysArr = Object.keys(req.query);
	const queryCount = keysArr.map((_, i) => `$${i + 1}`);
	if (keysArr.includes('search_q')) {
		// queryArr.push(`ILIKE $${valueIndex}%`);
		// valueArray.push(req.query.search_q);
		// valueIndex = valueIndex + 1;
	}
	if (keysArr.includes('category')) {
		// queryArr.push(`WHERE category ILIKE '%('||$${valueIndex}||')%'`);
		// queryArr.push(`WHERE category ILIKE '%$${valueIndex}%'`);
		queryArr.push(`WHERE category ILIKE $${valueIndex}`);
		// valueArray.push(`('||:${req.query.category}||')`);
		valueArray.push(`%${req.query.category}%`);
		valueIndex = valueIndex + 1;
	}
	if (keysArr.includes('limit')) {
		queryArr.push(`LIMIT $${valueIndex}`);
		valueArray.push(req.query.limit ? +req.query.limit : null);
		valueIndex = valueIndex + 1;
	}
	if (keysArr.includes('offset')) {
		queryArr.push(`OFFSET $${valueIndex}`);
		valueArray.push(req.query.offset ? +req.query.offset : null);
		valueIndex = valueIndex + 1;
	}

	req.searchQuery = queryArr.join(' ');
	req.queryArray = valueArray;
	console.log({wtf: typeof req.query.category});
	console.log({keysArr, queryCount, queryArr, valueArray});
	// console.log({QUERIES: req.query, keysArr, uhhhh: keysArr.indexOf('offset')});
	next();
};
