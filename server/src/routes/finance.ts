import express, {Request, Response} from 'express';
const router = express.Router();
import {pool} from '../config/pg';
import argon2 from 'argon2';
import {checkAuth} from '../middleware/checkAuth';
import {check, validationResult} from 'express-validator';

router.get('/secure/cards', [checkAuth], async (req: Request, res: Response) => {
	try {
		const userCards = await pool.query(`SELECT * FROM credit_cards WHERE user_id = $1`, [req.session.userId]);
		if (userCards.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Cards could not be found'});
		}
		return res.json({success: true, count: userCards.rowCount, cards: userCards.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

router.post(
	'/secure/new-card',
	[
		checkAuth,
		check('first_name', 'First name is required').not().isEmpty(),
		check('last_name', 'Last name is required').not().isEmpty(),
		check('card_number', 'Card number is required').not().isEmpty(),
		check('exp_date', 'Expiration date is required').not().isEmpty(),
		check('security_code', 'Security code is required').not().isEmpty()
	],
	async (req: Request, res: Response) => {
		const {first_name, last_name, card_number, exp_date, security_code} = req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}
		try {
			const hashedCard = await argon2.hash(card_number);
			const fourDigits = card_number.slice(card_number.length - 4, card_number.length);

			await pool.query(`INSERT INTO credit_cards (first_name, last_name, card_number, exp_date, security_code, last_four_digits, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [
				first_name,
				last_name,
				hashedCard,
				exp_date,
				security_code,
				fourDigits,
				req.session.userId
			]);
			return res.status(201).json({success: true, data: 'Card has been added'});
		} catch (err) {
			console.error(err);
			return res.status(500).json({success: false, data: 'Server Error'});
		}
	}
);

router.delete('/secure/delete/:cardId', [checkAuth], async (req: Request, res: Response) => {
	try {
		await pool.query(`DELETE FROM credit_cards WHERE id = $1`, [req.params.cardId]);
		return res.json({success: true, data: 'Card has been deleted'});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
