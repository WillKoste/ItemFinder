import {Request, Response, NextFunction} from 'express';

const whereOrAnd = (isFirst: boolean) => (isFirst ? 'WHERE' : 'AND');

export const searchQueries = (req: Request, _: Response, next: NextFunction) => {
	let queryArr: String[] = [];
	let valueIndex = 1;
	let valueArray = [];
	let isFirstVal = true;
	const keysArr = Object.keys(req.query);
	const queryCount = keysArr.map((_, i) => `$${i + 1}`);
	if (req.passedAuth) {
		queryArr.push(`${whereOrAnd(isFirstVal)} user_id = $${valueIndex}`);
		isFirstVal = false;
		valueArray.push(req.session.userId);
		valueIndex = valueIndex + 1;
	}
	if (keysArr.includes('category')) {
		queryArr.push(`${whereOrAnd(isFirstVal)} category ILIKE $${valueIndex}`);
		isFirstVal = false;
		valueArray.push(`%${req.query.category}%`);
		valueIndex = valueIndex + 1;
	}
	if (keysArr.includes('user_id')) {
		queryArr.push(`${whereOrAnd(isFirstVal)} user_id = $${valueIndex}`);
		isFirstVal = false;
		valueArray.push(req.query.user_id);
		valueIndex = valueIndex + 1;
	}
	if (keysArr.includes('order_by')) {
		if (req.query.order_by?.toString().toLowerCase() === 'asc') {
			console.log('ASC');
			queryArr.push(`ORDER BY created_at asc`);
		} else if (req.query.order_by?.toString().toLowerCase() === 'desc') {
			console.log('DESC');
			queryArr.push(`ORDER BY created_at desc`);
		}
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
