import express, {Request, Response} from 'express';
const router = express.Router();
import argon from 'argon2';
import {check, validationResult} from 'express-validator';
import {pool} from '../config/pg';
import {checkAuth} from '../middleware/checkAuth';
import {User} from 'src/types/routes';
import {QueryResult} from 'pg';
import {checkRole} from '../middleware/checkRole';
import jwt from 'jsonwebtoken';
import {checkJWTAuth} from '../middleware/jwtAuth';

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
 * @name Get Current User (Web)
 */
router.get('/web/me', [checkAuth], async (req: Request, res: Response) => {
	console.log('hey');

	try {
		if (!req.session.userId) {
			return res.status(401).json({success: false, data: 'Authorization Denied'});
		}
		const user = await pool.query(`SELECT id, email, phone, image, is_admin, is_partner, is_premium, partner_code FROM users WHERE id = $1`, [req.session.userId]);

		return res.json({success: true, user: user.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Get Current User (Mobile)
 */
router.get('/mobile/me', [checkJWTAuth], async (req: Request, res: Response) => {
	try {
		const user = await pool.query(`SELECT id, email, phone, image, is_admin, is_partner, is_premium, partner_code FROM users WHERE id = $1`, [(req.user as any).id]);
		console.log({WILL: user.rows[0]});
		return res.json({success: true, user: user.rows[0]});
	} catch (err) {
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Register (Web)
 */
router.post(
	'/web/register',
	[check('email', 'Email is required').isEmail(), check('phone', 'Phone is required').not().isEmpty(), check('password', 'Password is required, and must be at least 6 characters').isLength({min: 6})],
	async (req: Request, res: Response): Promise<Response> => {
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
	}
);

/**
 * @name Register (Mobile)
 */
router.post('/mobile/register', [check('email', 'Email is required').isEmail(), check('phone', 'Phone number is required').not().isEmpty(), check('password', 'Password is required').isLength({min: 6})], async (req: Request, res: Response) => {
	// const errors = validationResult(req);

	// if (!errors.isEmpty()) {
	// 	return res.status(400).json({errors: errors.array()});
	// }

	const {email, password, phone} = req.body;
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

		const payload = {
			user: {
				id: newUser.rows[0].id
			}
		};

		jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN}, (e, token) => {
			if (e) {
				console.log({err: e});
				return res.status(500).json({success: false, data: 'Could not complete process'});
			}
			return res.status(201).json({success: true, token});
		});
		return;
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Login (Web)
 */
// router.post('/login', [check('email', 'Email is required').isEmail(), check('password', 'Password is required').isLength({min: 6})], async (req: Request, res: Response) => {
router.post('/web/login', async (req: Request, res: Response) => {
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
 * @name Login (Mobile)
 */
router.post('/mobile/login', async (req: Request, res: Response) => {
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
		const payload = {
			user: {
				id: checkUser.rows[0].id
			}
		};
		jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN}, (e, token) => {
			if (e) {
				console.log({err: e});
				return res.status(500).json({success: false, data: 'Could not complete process'});
			}
			return res.json({success: true, token});
		});
		return;
		// const {email: email2, id, phone, image, is_admin, is_partner, is_premium, partner_code} = checkUser.rows[0];

		// req.session.userId = checkUser.rows[0].id;
		// return res.json({success: true, user: {email2, id, phone, image, is_admin, is_partner, is_premium, partner_code}, session: req.sessionID});
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
		res.clearCookie(process.env.COOKIE_NAME, {secure: true, sameSite: 'none'});
		return res.json({success: true, data: 'Session has been terminated.'});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
