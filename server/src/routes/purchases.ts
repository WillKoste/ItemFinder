import express, {Request, Response} from 'express';
import {pool} from '../config/pg';
const router = express.Router();
import {v4 as uuidv4} from 'uuid';
import argon2 from 'argon2';
import {searchQueries} from '../middleware/searchQueries';

/**
 * @name Get All Purchases
 */
router.get('/', [searchQueries], async (req: Request, res: Response) => {
	console.log({query: req.query});
	try {
		const purchases = await pool.query(`SELECT id, items, shipping_address, billing_address, gift, confirmation_code, created_at, user_id, order_total FROM purchases ${req.searchQuery}`, req.queryArray);
		if (purchases.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Purchases not found'});
		}
		return res.json({success: true, count: purchases.rowCount, purchases: purchases.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Create Purchase
 */
router.post('/', async (req: Request, res: Response) => {
	const {items, shippingAddress, billingAddress, ccDig, gift, customerStatus, shippingMethod, cartTotal, userId} = req.body;
	const confirmationCode = uuidv4();
	const secureCC = await argon2.hash(ccDig);
	const isGift = gift === 'yes';

	console.log('YAYAYA');
	try {
		const newPurchase = await pool.query(
			`INSERT INTO purchases (items, shipping_address, billing_address, cc_dig, gift, customer_status, confirmation_code, shipping_method, order_total, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
			[items, shippingAddress, billingAddress, secureCC, isGift, customerStatus, confirmationCode, shippingMethod, cartTotal, userId]
		);
		return res.status(201).json({success: true, purchase: newPurchase.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
