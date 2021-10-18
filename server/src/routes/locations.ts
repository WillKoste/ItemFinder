import express from 'express';
const router = express.Router();

/**
 * @name Get All Locations
 */
router.get('/', async (_, res) => {
	try {
		res.send('Locations Route');
	} catch (err) {
		console.error({err});
		res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
