import express, {Request, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../config/pg';
import {Location} from '../types/routes';
const router = express.Router();

/**
 * @name Get All Locations
 */
router.get('/', async (_, res: Response) => {
	try {
		const locations: QueryResult<Location[]> = await pool.query(`SELECT * FROM locations`);
		if (locations.rowCount === 0) {
			return res.status(404).json({success: false, data: 'Locations could not be found', locations: []});
		}

		return res.json({success: true, count: locations.rowCount, locations: locations.rows[0]});
	} catch (err) {
		console.error({err});
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Get Location By ID
 */
router.get('/:locationId', async (req: Request, res: Response) => {
	try {
		const location: QueryResult<Location> = await pool.query(`SELECT * FROM locations WHERE id = $1`, [req.params.locationId]);
		if (location.rowCount === 0) {
			return res.status(404).json({success: false, data: `Location ${req.params.locationId} could not be found`, location: null});
		}

		return res.json({success: true, location: location.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
