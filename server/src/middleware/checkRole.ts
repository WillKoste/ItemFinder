import {NextFunction, Request, Response} from 'express';
import {QueryResult} from 'pg';
import {User} from 'src/types/routes';
import {pool} from '../config/pg';

export const checkRole = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user: QueryResult<User> = await pool.query(`SELECT * FROM users WHERE id = $1`, [req.session.userId]);

		if (user.rowCount === 0) res.status(400).json({success: false, data: 'Authorization Denied'});
		if (user.rows[0].is_admin) req.isAdmin = true;
		if (user.rows[0].is_premium) req.isPremium = true;
		if (user.rows[0].is_partner) req.isPartner = true;
		next();
		return;
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
};
