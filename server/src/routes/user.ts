import express, {Request, Response} from 'express';
const router = express.Router();
import argon from 'argon2';
import {check, validationResult} from 'express-validator';
import {pool} from '../config/pg';
import {checkAuth} from '../middleware/checkAuth';
import {User} from 'src/types/routes';

/**
 * @name Get All Users
 */
router.get('/', checkAuth, async (_, res): Promise<Response> => {
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
router.post('/', [check('email', 'Email is required').isEmail(), check('phone', 'Phone is required').not().isEmpty(), check('password', 'Password is required, and must be at least 6 characters').isLength({min: 6})], async (req: Request, res: Response): Promise<Response> => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}

	const {email, phone, image, is_premium, is_partner, is_admin, password, parner_code} = req.body;

	console.log({email, phone, image, is_premium, is_partner, is_admin, password, parner_code});
	try {
		const hashedPassword = await argon.hash(password);
		const newUser = await pool.query(
			`
      INSERT INTO users (email, phone, password)
        VALUES ($1, $2, $3)
        RETURNING *
    `,
			[email, phone, hashedPassword]
		);
		const user: User = await newUser.rows[0];
		req.session.userId = user.id;
		return res.status(201).json({success: true, user});
	} catch (err) {
		console.error(err);
		return res.status(500);
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
		return res.json({success: true, data: 'Session has been terminated.'});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
