import express, {Request, Response} from 'express';
import {Product} from '../types/routes';
import {pool} from '../config/pg';
import {QueryResult} from 'pg';
const router = express.Router();

/**
 * @name Get All Products
 */
router.get('/', async (req: Request, res: Response) => {
	console.log({req: req.query});
	try {
		const products: QueryResult<Product[]> = await pool.query(`SELECT * FROM products limit $1 offset $2`, [req.query.limit, req.query.offset]);
		if (products.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Products could not be found'});
		}
		console.log({products: products.rowCount});

		return res.json({success: true, count: products.rowCount, products: products.rows});
	} catch (err) {
		console.error({err});
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Get Product By ProductId
 */
router.get('/:productId', async (req: Request<{productId: string}>, res: Response) => {
	try {
		const product = await pool.query(`SELECT * FROM products WHERE id = $1`, [req.params.productId]);
		if (product.rowCount === 0) {
			return res.status(404).json({success: false, data: `Product ${req.params.productId} not found`});
		}
		return res.json({success: true, product: product.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
