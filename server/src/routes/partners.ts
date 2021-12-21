import express from 'express';
import {pool} from '../config/pg';
const router = express.Router();

/**
 * @name Get All Partners
 */
router.get('/', async (_, res) => {
	try {
		const partners = await pool.query(`SELECT * FROM partners`);
		if (partners.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Partners not found'});
		}
		return res.json({success: true, count: partners.rowCount, partners: partners.rows});
	} catch (err) {
		console.error({err});
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
