import express, {Request, Response} from 'express';
import {Product} from '../types/routes';
import {pool} from '../config/pg';
import {QueryResult} from 'pg';
import {checkAuth} from '../middleware/checkAuth';
const router = express.Router();

/**
 * @name Get All Products
 */
router.get('/', checkAuth, async (req: Request, res: Response) => {
	console.log({cookie: req.session.cookie, header: req.headers, session: req.session});
	console.log('hey');

	try {
		const products: QueryResult<Product[]> = await pool.query(`SELECT * FROM products`);
		if (products.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Products could not be found'});
		}

		return res.json({success: true, count: products.rowCount, products: products.rows});
	} catch (err) {
		console.error({err});
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
