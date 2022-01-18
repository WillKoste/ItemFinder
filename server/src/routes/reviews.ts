import express, {Request, Response} from 'express';
import {Review} from '../types/routes';
import {pool} from '../config/pg';
const router = express.Router();

/**
 * @name Get All Reviews
 */
router.get('/', async (req: Request, res: Response) => {
	const {search_q} = req.query;

	if (search_q) {
		console.log('search q');
	}

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

router.get('/product/:productId', async (req: Request<{productId: number}>, res: Response) => {
	const {limit, offset, usId} = req.query;
	const {productId} = req.params;

	console.log('hello');
	try {
		const reviews = await pool.query(`SELECT r.*, rv.vote_type FROM reviews r LEFT JOIN review_votes rv ON rv.review_id = r.id and rv.user_id = $1 WHERE product_id = $2 LIMIT $3 OFFSET $4`, [usId, productId, limit, offset]);
		if (reviews.rowCount === 0) {
			return res.status(404).json({success: false, data: `Reviews for item ${req.params.productId} not found`});
		}
		return res.json({success: true, reviews: reviews.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Search Reviews
 */
router.get('/search', async (req: Request, res: Response) => {
	const {search_q} = req.query;
	try {
		const reviews = await pool.query(`SELECT * FROM reviews WHERE body ilike "%$1%" or title ilike "$2%%"`, [search_q, search_q]);
		if (reviews.rowCount === 0) {
			return res.status(404).json({success: false, data: `No data found for "${search_q}"`});
		}
		return res.json({success: true, count: reviews.rowCount, reviews: reviews.rows});
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
 * @name Upvote Review
 */
router.post('/upvote', async (req: Request, res: Response) => {
	const {reviewId, userId, voteTypeVal} = req.query;

	try {
		const reviewByUser = await pool.query(`SELECT * FROM reviews WHERE id = $1`, [reviewId]);
		const reviewTotalRating = reviewByUser.rows[0].rating;
		const voteExists = await pool.query(`SELECT id, vote_type FROM review_votes WHERE review_id = $1 AND user_id = $2`, [reviewId, userId]);
		console.log({reviewByUser: reviewByUser.rows[0], reviewTotalRating, newRating1: reviewTotalRating - 1, newRating2: reviewTotalRating + 2});
		// DETERMINES IF THE USER HAS ALREADY VOTED
		if (voteExists.rowCount > 0) {
			if (voteTypeVal && +voteTypeVal === voteExists.rows[0].vote_type) {
				// USER CLICKS THE SAME VOTE, THAT WAS ALREADY SELECTED, TO CANCEL THE VOTE
				await pool.query('UPDATE reviews SET rating = $1 WHERE id = $2', [reviewTotalRating - 1, reviewId]);
				await pool.query(`DELETE FROM review_votes WHERE review_id = $1 AND user_id = $2`, [reviewId, userId]);
				return res.json({success: true, data: `Review vote updated`, newRating: reviewTotalRating - 1});
			} else {
				// USER VOTES UPVOTE WHEN THEY PREVIOUSLY CLICKED DOWNVOTE
				await pool.query('UPDATE reviews SET rating = $1 WHERE id = $2', [reviewTotalRating + 2, reviewId]);
				await pool.query(`UPDATE review_votes SET vote_type = $1 WHERE review_id = $2 AND user_id = $3`, [voteTypeVal, reviewId, userId]);
				return res.json({success: true, data: `Review vote updated`, newRating: reviewTotalRating + 2});
			}
		}

		// USER HAS VOTED FOR THE FIRST TIME
		await pool.query('UPDATE reviews SET rating = $1 WHERE id = $2', [reviewTotalRating + 1, reviewId]);
		await pool.query(`INSERT INTO review_votes (review_id, user_id, vote_type) VALUES ($1, $2, $3)`, [reviewId, userId, 1]);
		return res.json({success: true, data: `Review vote updated`, newRating: reviewTotalRating + 1});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: true, data: 'Server Error'});
	}
});

/**
 * @name Downvote Review
 */
router.post('/downvote', async (req: Request, res: Response) => {
	const {reviewId, userId, voteTypeVal} = req.query;

	try {
		const reviewByUser = await pool.query(`SELECT * FROM reviews WHERE id = $1`, [reviewId]);
		const reviewTotalRating = reviewByUser.rows[0].rating;
		const voteExists = await pool.query(`SELECT id, vote_type FROM review_votes WHERE review_id = $1 AND user_id = $2`, [reviewId, userId]);
		// DETERMINES IF USER HAS ALREADY VOTED
		if (voteExists.rowCount > 0) {
			if (voteTypeVal && +voteTypeVal === voteExists.rows[0].vote_type) {
				// USER HAS CLICKED DOWNVOTE AFTER PREVIOUSLY SELECTING DOWNVOTE - CANCELS THE VOTE OUT
				console.log('yepyep');
				await pool.query('UPDATE reviews SET rating = $1 WHERE id = $2', [reviewTotalRating + 1, reviewId]);
				await pool.query(`DELETE FROM review_votes WHERE review_id = $1 AND user_id = $2`, [reviewId, userId]);
				return res.json({success: true, data: `Review vote updated`, newRating: reviewTotalRating + 1});
			} else {
				// USER CHANGES VOTE FROM UPVOTE TO DOWNVOTE
				await pool.query('UPDATE reviews SET rating = $1 WHERE id = $2', [reviewTotalRating - 2, reviewId]);
				await pool.query(`UPDATE review_votes SET vote_type = $1 WHERE review_id = $2 AND user_id = $3`, [voteTypeVal, reviewId, userId]);
				return res.json({success: true, data: `Review vote updated`, newRating: reviewTotalRating - 2});
			}
		}
		// USER VOTES FOR THE FIRST TIME
		await pool.query('UPDATE reviews SET rating = $1 WHERE id = $2', [reviewTotalRating - 1, reviewId]);
		await pool.query(`INSERT INTO review_votes (review_id, user_id, vote_type) VALUES ($1, $2, $3)`, [reviewId, userId, -1]);
		return res.json({success: true, data: `Review vote updated`, newRating: reviewTotalRating - 1});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: true, data: 'Server Error'});
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
