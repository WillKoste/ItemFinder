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
		queryArr.push(`WHERE category ILIKE $${valueIndex}`);
		valueArray.push(`%${req.query.category}%`);
		valueIndex = valueIndex + 1;
	}
	if (keysArr.includes('user_id')) {
		const notFirst = keysArr.includes('category');
		if (notFirst) {
			queryArr.push(`AND user_id = $${valueIndex}`);
		} else {
			queryArr.push(`WHERE user_id = $${valueIndex}`);
		}
		// queryArr.push(`WHERE user_id = $${valueIndex}`);
		valueArray.push(req.query.user_id);
		valueIndex = valueIndex + 1;
	}
	if (keysArr.includes('order_by')) {
		// queryArr.push(`ORDER BY created_at $${valueIndex}`);

		if (req.query.order_by?.toString().toLowerCase() === 'asc') {
			console.log('ASC');
			queryArr.push(`ORDER BY created_at asc`);
		} else if (req.query.order_by?.toString().toLowerCase() === 'desc') {
			console.log('DESC');
			queryArr.push(`ORDER BY created_at desc`);
		}

		// const str1 = 'desc';
		// console.log(req.query.order_by, str1);
		// console.log(typeof req.query.order_by, typeof str1);
		// queryArr.push(`ORDER BY created_at ${str1}`);

		// valueArray.push(req.query.order_by);
		// valueIndex = valueIndex + 1;
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
	console.log({keysArr, queryCount, queryArr, valueArray});
	next();
};
