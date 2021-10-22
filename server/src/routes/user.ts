import express, {Request, Response} from 'express';
const router = express.Router();
import argon from 'argon2';
import {check, validationResult} from 'express-validator';
import {pool} from '../config/pg';
import {checkAuth} from '../middleware/checkAuth';
import {User} from 'src/types/routes';
import {QueryResult} from 'pg';
import {checkRole} from '../middleware/checkRole';

/**
 * @name Get All Users
 */
router.get('/', [checkAuth, checkRole], async (_: any, res: Response): Promise<Response> => {
	try {
		const users = await pool.query(`SELECT * FROM users`);

		if (users.rowCount === 0) {
			return res.status(404).json({success: false, data: 'No users found'});
		}

		return res.json({success: true, count: users.rowCount, users: users.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Register
 */
router.post('/register', [check('email', 'Email is required').isEmail(), check('phone', 'Phone is required').not().isEmpty(), check('password', 'Password is required, and must be at least 6 characters').isLength({min: 6})], async (req: Request, res: Response): Promise<Response> => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}
	const {email, phone, password} = req.body;

	try {
		const hashedPassword = await argon.hash(password);
		const newUser = await pool.query(
			`
      INSERT INTO users (email, phone, password)
        VALUES ($1, $2, $3)
        RETURNING id, email, phone, image, is_admin, is_partner, is_premium, partner_code
    `,
			[email, phone, hashedPassword]
		);
		const user: User = await newUser.rows[0];
		req.session.userId = user.id;
		return res.status(201).json({success: true, user, session: req.sessionID});
	} catch (err) {
		console.error(err);
		return res.status(500);
	}
});

/**
 * @name Login
 */
// router.post('/login', [check('email', 'Email is required').isEmail(), check('password', 'Password is required').isLength({min: 6})], async (req: Request, res: Response) => {
router.post('/login', async (req: Request, res: Response) => {
	const {email, password} = req.body;

	try {
		console.log({email, password});
		const checkUser: QueryResult<User> = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);

		if (checkUser.rowCount === 0) {
			return res.status(400).json({success: false, data: 'Authorization denied'});
		}

		const isMatch = await argon.verify(checkUser.rows[0].password, password);

		if (!isMatch) {
			return res.status(400).json({success: false, data: 'Authorization denied'});
		}
		const {email: email2, id, phone, image, is_admin, is_partner, is_premium, partner_code} = checkUser.rows[0];

		req.session.userId = checkUser.rows[0].id;
		return res.json({success: true, user: {email2, id, phone, image, is_admin, is_partner, is_premium, partner_code}, session: req.sessionID});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Logout
 */
router.post('/logout', checkAuth, async (req, res): Promise<Response> => {
	try {
		req.session.destroy((err) => {
			if (err) {
				console.log({err});
				return;
			}
		});
		res.clearCookie(process.env.COOKIE_NAME, {secure: 'auto', sameSite: 'none'});
		return res.json({success: true, data: 'Session has been terminated.'});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
