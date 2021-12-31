import express, {Request, Response} from 'express';
import {pool} from '../config/pg';
import {checkAuth} from '../middleware/checkAuth';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
	const {productId} = req.query;
	try {
		const queryParams = Array.from(Object.keys(req.query)).map((b) => req.query[b]);
		const favorites = await pool.query(
			`SELECT * FROM favorites f INNER JOIN products p ON p.id = f.product_id WHERE f.user_id = $1${productId ? `AND f.product_id = $2` : ''} LIMIT $${productId ? '3' : '2'} OFFSET $${productId ? '4' : '3'}`,
			queryParams
		);
		if (favorites.rowCount === 0) {
			return res.status(404).json({success: false, data: `Favorite not found`});
		}
		return res.json({success: true, count: favorites.rowCount, favorites: favorites.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

router.post('/', checkAuth, async (req: Request, res: Response) => {
	const {userId, productId} = req.query;

	try {
		const fav = await pool.query(`SELECT id FROM favorites WHERE user_id = $1 AND product_id = $2`, [userId, productId]);
		if (fav.rowCount !== 0) {
			console.log({sup: fav.rows[0].id});
			await pool.query(`DELETE FROM favorites WHERE user_id = $1 AND product_id = $2`, [userId, productId]);
			return res.json({success: true, data: `Favorite ${fav.rows[0].id} has been removed`});
		}
	} catch (err) {
		console.error(err);
	}

	try {
		const newFavorite = await pool.query(`INSERT INTO favorites (user_id, product_id) VALUES ($1, $2) RETURNING *`, [userId, productId]);
		return res.status(201).json({success: false, favorite: newFavorite.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

router.delete('/delete/:favoriteId', async (req: Request<{favoriteId: number | string}>, res: Response) => {
	const {favoriteId} = req.params;

	try {
		const deletedFav = await pool.query('DELETE FROM favorites WHERE id = $1', [favoriteId]);
		if (deletedFav.rowCount === 0) {
			return res.status(404).json({success: false, data: `Favorite ${favoriteId} not found`});
		}
		return res.json({success: true, data: `Favorite ${favoriteId} has been deleted`});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
