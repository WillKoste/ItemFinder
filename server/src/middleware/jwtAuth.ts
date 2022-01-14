import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export const checkJWTAuth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('x-auth-token');
	if (!token) {
		return res.status(401).json({success: false, data: 'Authorization Denied'});
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded.user;
		next();
		return;
	} catch (err) {
		console.error(err);
		return res.status(401).json({success: false, data: 'Authorization Denied'});
	}
};
