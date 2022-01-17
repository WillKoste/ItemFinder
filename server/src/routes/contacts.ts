import express, {Response, Request} from 'express';
import {Contact} from 'src/types/routes';
import {pool} from '../config/pg';
import {check, validationResult} from 'express-validator';
const router = express.Router();

/**
 * @name Get All Contacts
 */
router.get('/', async (req: Request, res: Response) => {
	try {
		const contacts = await pool.query(`SELECT id, first_name, last_name, contact_type, address, created_at FROM contacts WHERE origin_id = $1 order by first_name, id limit $2 offset $3`, [req.query.originId, req.query.limit, req.query.offset]);
		if (contacts.rowCount === 0) {
			return res.status(404).json({success: false, data: `Contacts not found`});
		}
		return res.json({success: true, count: contacts.rowCount, contacts: contacts.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Get Contact By Id
 */
router.get('/:contactId', async (req: Request, res: Response) => {
	try {
		const contact = await pool.query(`SELECT id, first_name, last_name, contact_type, address, created_at FROM contacts WHERE id = $1`, [req.params.contactId]);
		if (contact.rowCount === 0) {
			return res.status(404).json({success: false, data: `Could not find contact ${req.params.contactId}`});
		}
		return res.json({success: true, contact: contact.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Create Contact
 */
router.post('/', [check('contactType', 'contactType is required').not().isEmpty(), check('firstName', 'firstName is required').not().isEmpty(), check('lastName', 'lastName is required').not().isEmpty()], async (req: Request, res: Response) => {
	const {address, firstName, lastName, creditCard, contactType}: Contact = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({success: false, errors: errors.array()});
	}

	try {
		const newContact = await pool.query(`INSERT INTO contacts (contact_type, first_name, last_name, address, credit_card) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [contactType, firstName, lastName, address, creditCard]);

		return res.status(201).json({success: true, newContact: newContact.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Update Contact
 */
router.put('/:contactId', async (req: Request, res: Response) => {
	const {address, contactType, firstName, lastName, creditCard}: Contact = req.body;
	try {
		const contact = await pool.query(`SELECT * FROM contacts WHERE id = $1`, [req.params.contactId]);
		if (contact.rowCount === 0) {
			return res.status(404).json({success: false, data: `Contact ${req.params.contactId} could not be found`});
		}
		const contactFields = contact.rows[0];

		const updatedContact = await pool.query(`UPDATE contacts SET address = $1, first_name = $2, last_name = $3, contact_type = $4, credit_card = $5 WHERE id = $6 RETURNING *`, [
			address ? address : contactFields.address,
			firstName ? firstName : contactFields.first_name,
			lastName ? lastName : contactFields.last_name,
			contactType ? contactType : contactFields.contact_type,
			creditCard ? creditCard : contactFields.credit_card,
			req.params.contactId
		]);
		return res.status(201).json({success: true, contact: updatedContact.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

router.delete('/:contactId', async (req: Request, res: Response) => {
	try {
		const contact = await pool.query(`SELECT * FROM contacts WHERE id = $1`, [req.params.contactId]);
		if (contact.rowCount === 0) {
			return res.status(404).json({success: false, data: `Contact ${req.params.contactId} could not be found`});
		}
		await pool.query(`DELETE FROM contacts WHERE id = $1`, [req.params.contactId]);
		return res.json({success: true, data: `Contact ${req.params.contactId} has been deleted`});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

export default router;
