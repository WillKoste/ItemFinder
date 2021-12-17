import express, {Request, Response} from 'express';
import {Review} from 'src/types/routes';
import {pool} from '../config/pg';
const router = express.Router();

/**
 * @name Get All Reviews
 */
router.get('/', async (_, res: Response) => {
	try {
		const reviews = await pool.query(`SELECT * FROM reviews`);
		if (reviews.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Reviews not found'});
		}
		return res.json({success: true, count: reviews.rowCount, reviews: reviews.rows});
	} catch (err) {
		console.error({err});
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Get Review By ID
 */
router.get('/:reviewId', async (req: Request, res: Response) => {
	try {
		const review = await pool.query(`SELECT * FROM reviews WHERE id = $1`, [req.params.reviewId]);
		if (review.rowCount === 0) {
			return res.status(404).json({success: false, data: `Review ${req.params.reviewId} not found`});
		}
		return res.json({success: true, review: review.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Create Review
 */
router.post('/', async (req: Request, res: Response) => {
	const {body, title}: Review = req.body;
	try {
		const newReview = await pool.query(`INSERT INTO reviews (title, body) VALUES ($1, $2) RETURNING *`, [title, body]);
		return res.status(500).json({success: true, review: newReview.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Update Review
 */
router.put('/:reviewId', async (req: Request, res: Response) => {
	const {title, body}: Review = req.body;
	try {
		const review = await pool.query(`SELECT * FROM reviews WHERE id = $1`, [req.params.reviewId]);
		if (review.rowCount === 0) {
			return res.status(404).json({success: false, data: `Review ${req.params.reviewId} not found`});
		}
		const updateReview = await pool.query(`UPDATE reviews SET title = $1, body = $2 WHERE id = $3`, [title, body, req.params.reviewId]);
		return res.status(201).json({success: true, review: updateReview.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Delete Review
 */
router.delete('/:reviewId', async (req: Request, res: Response) => {
	try {
		const review = await pool.query('SELECT * FROM reviews WHERE id = $1', [req.params.reviewId]);
		if (review.rowCount === 0) {
			return res.status(404).json({success: false, data: `Review ${req.params.reviewId} not found`});
		}
		await pool.query(`DELETE FROM reviews WHERE id = $1`, [req.params.reviewId]);
		return res.json({success: true, data: `Review ${req.params.reviewId} has been deleted`});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
