import express, {Request, Response} from 'express';
const router = express.Router();
import {pool} from '../config/pg';
import argon2 from 'argon2';
import {checkAuth} from '../middleware/checkAuth';
import {check, validationResult} from 'express-validator';
import {searchQueries} from '../middleware/searchQueries';

/**
 * @name Get All Credit Cards
 */
router.get('/secure/cards', [checkAuth, searchQueries], async (req: Request, res: Response) => {
	try {
		// const userCards = await pool.query(`SELECT id, first_name, last_name, exp_date, security_code, use_as_default, created_at, user_id, last_four_digits FROM credit_cards WHERE user_id = $1`, [req.session.userId]);
		const userCards = await pool.query(`SELECT id, first_name, last_name, exp_date, use_as_default, created_at, user_id, last_four_digits FROM credit_cards ${req.searchQuery}`, req.queryArray);
		if (userCards.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Cards could not be found'});
		}
		console.log(userCards.command);

		return res.json({success: true, count: userCards.rowCount, cards: userCards.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Get Credit Card By Id
 */
router.get('/secure/cards/:cardId', [checkAuth], async (req: Request, res: Response) => {
	try {
		const card = await pool.query(`SELECT id, first_name, last_name, exp_date, security_code, use_as_default, created_at, user_id, last_four_digits FROM credit_cards WHERE id = $1 AND user_id = $2`, [req.params.cardId, req.session.userId]);
		if (card.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Card not found'});
		}
		return res.json({success: true, card: card.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Add New Credit Card
 */
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
			const finalFourDigits = `**** **** **** ${fourDigits}`;

			await pool.query(`INSERT INTO credit_cards (first_name, last_name, card_number, exp_date, security_code, last_four_digits, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [
				first_name,
				last_name,
				hashedCard,
				exp_date,
				security_code,
				finalFourDigits,
				req.session.userId
			]);
			return res.status(201).json({success: true, data: 'Card has been added'});
		} catch (err) {
			console.error(err);
			return res.status(500).json({success: false, data: 'Server Error'});
		}
	}
);

/**
 * @name Change Default Credit Card
 */
router.put('/secure/cards/default/:cardId', [checkAuth], async (req: Request, res: Response) => {
	try {
		const cardExists = await pool.query(`SELECT id FROM credit_cards WHERE id = $1 AND user_id = $2`, [req.params.cardId, req.session.userId]);
		if (cardExists.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Card not found'});
		}
		await pool.query(`UPDATE credit_cards SET use_as_default = false WHERE user_id = $1 AND use_as_default = true`, [req.session.userId]);
		await pool.query(`UPDATE credit_cards SET use_as_default = true WHERE id = $1 AND user_id = $2`, [req.params.cardId, req.session.userId]);
		return res.json({success: true, data: 'Default updated'});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Delete Credit Card
 */
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
