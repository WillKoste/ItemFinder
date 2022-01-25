import express, {Response, Request} from 'express';
import {Contact} from 'src/types/routes';
import {pool} from '../config/pg';
import {check, validationResult} from 'express-validator';
import {checkAuth} from '../middleware/checkAuth';
const router = express.Router();

/**
 * @name Get All Contacts
 */
router.get('/', [checkAuth], async (req: Request, res: Response) => {
	try {
		const contacts = await pool.query(`SELECT * FROM contacts WHERE origin_id = $1 order by first_name, id limit $2 offset $3`, [req.session.userId, req.query.limit, req.query.offset]);
		const contactsTotal = await pool.query(`SELECT id FROM contacts WHERE origin_id = $1`, [req.session.userId]);
		if (contacts.rowCount === 0) {
			return res.status(404).json({success: false, data: `Contacts not found`});
		}
		return res.json({success: true, count: contacts.rowCount, total: contactsTotal.rowCount, contacts: contacts.rows});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Get Contact By Id
 */
router.get('/:contactId', [checkAuth], async (req: Request, res: Response) => {
	try {
		const contact = await pool.query(`SELECT * FROM contacts WHERE id = $1`, [req.params.contactId]);
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
router.post('/', [checkAuth, check('firstName', 'firstName is required').not().isEmpty(), check('lastName', 'lastName is required').not().isEmpty()], async (req: Request, res: Response) => {
	const {firstName, middleInitial, lastName, phone, email, relation, streetAddress, city, state, zip, companyName, companyTitle, companyMemberType, companyStreetAddress, companyCity, companyState, companyZip, contactType}: Contact = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({success: false, errors: errors.array()});
	}
	try {
		const newContact = await pool.query(
			`INSERT INTO contacts (first_name, middle_initial, last_name, phone, email, relation, street_address, city, state, zip, company_name, company_title, company_member_type, company_street_address, company_city, company_state, company_zip, contact_type, origin_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *`,
			[firstName, middleInitial, lastName, phone, email, relation, streetAddress, city, state, zip, companyName, companyTitle, companyMemberType, companyStreetAddress, companyCity, companyState, companyZip, contactType, req.session.userId]
		);

		return res.status(201).json({success: true, contact: newContact.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
 * @name Update Contact
 */
router.put('/:contactId', [checkAuth], async (req: Request, res: Response) => {
	const {streetAddress: address, contactType, firstName, lastName}: Contact = req.body;
	try {
		const contact = await pool.query(`SELECT * FROM contacts WHERE id = $1`, [req.params.contactId]);
		if (contact.rowCount === 0) {
			return res.status(404).json({success: false, data: `Contact ${req.params.contactId} could not be found`});
		}
		const contactFields = contact.rows[0];

		const updatedContact = await pool.query(`UPDATE contacts SET address = $1, first_name = $2, last_name = $3, contact_type = $4 WHERE id = $6 RETURNING *`, [
			address ? address : contactFields.address,
			firstName ? firstName : contactFields.first_name,
			lastName ? lastName : contactFields.last_name,
			contactType ? contactType : contactFields.contact_type,
			req.params.contactId
		]);
		return res.status(201).json({success: true, contact: updatedContact.rows[0]});
	} catch (err) {
		console.error(err);
		return res.status(500).json({success: false, data: 'Server Error'});
	}
});

router.delete('/:contactId', [checkAuth], async (req: Request, res: Response) => {
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
