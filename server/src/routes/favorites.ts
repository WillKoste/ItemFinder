import express, {Request, Response} from 'express';
import {pool} from '../config/pg';
import {checkAuth} from '../middleware/checkAuth';
const router = express.Router();

router.post('/', checkAuth, async (req: Request, res: Response) => {
	const {userId, productId} = req.query;
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
