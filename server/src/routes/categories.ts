import express, {Request, Response} from 'express';
import {pool} from '../config/pg';
const router = express.Router();

/**
 * @name Get All Categories
 */
router.get('/', async (req: Request, res: Response) => {
	const {limit, offset} = req.query;

	try {
		const categories = await pool.query(`SELECT * FROM categories LIMIT $1 OFFSET $2`, [limit, offset]);
		if (categories.rowCount === 0) {
			return res.status(404).json({success: false, data: `Could not find categories`});
		}
		return res.json({success: true, count: categories.rowCount, categories: categories.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Get Category By Id
 */
router.get('/', async (req: Request<{categoryId: string}>, res: Response) => {
	try {
		const category = await pool.query(`SELECT * FROM categories WHERE id = $1`, [req.params.categoryId]);
		if (category.rowCount === 0) {
			return res.status(404).json({success: false, data: `Category ${req.params.categoryId} not found`});
		}
		return res.json({success: true, category: category.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
