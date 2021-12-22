import express, {Request, Response} from 'express';
import {pool} from '../config/pg';
const router = express.Router();

router.get('/all/:productId', async (req: Request, res: Response) => {
	try {
		const productHistory = await pool.query(`SELECT ph.*, p.category, p.description, p.created_at, p.image, p.sku, p.name  FROM product_history ph INNER JOIN products p ON p.id = ph.product_id WHERE product_id = $1`, [req.params.productId]);
		if (productHistory.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Product history not found'});
		}
		return res.json({success: true, count: productHistory.rowCount, productHistory: productHistory.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({});
	}
});

router.get('/single/:productId/:productHistoryId', async (req: Request, res: Response) => {
	try {
		const productHistory = await pool.query(`SELECT ph.*, p.category, p.description, p.created_at, p.image, p.sku, p.name FROM product_history ph INNER JOIN products p ON p.id = ph.product_id  WHERE product_id = $1 AND ph.id = $2`, [
			req.params.productId,
			req.params.productHistoryId
		]);
		if (productHistory.rowCount === 0) {
			return res.status(404).json({success: false, data: `Product ${req.params.productId} history not found`});
		}
		return res.json({success: true, productHistory: productHistory.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
