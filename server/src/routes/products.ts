import express, {Request, Response} from 'express';
import {Product} from '../types/routes';
import {pool} from '../config/pg';
import {QueryResult} from 'pg';
import {searchQueries} from '../middleware/searchQueries';
const router = express.Router();

/**
 * @name Get All Products
 */
router.get('/', [searchQueries], async (req: Request, res: Response) => {
	try {
		const products: QueryResult<Product[]> = await pool.query(`SELECT * FROM products p ${req.searchQuery}`, req.queryArray);
		if (products.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Products could not be found'});
		}
		console.log({WILLIAM: req.searchQuery, woahh: req.queryArray});

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
		const product = await pool.query(`SELECT p.*, ph.id product_history_id, ph.partner_id, ph.recorded_on FROM products p LEFT JOIN product_history ph ON ph.product_id = p.id WHERE p.id = $1`, [req.params.productId]);
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
