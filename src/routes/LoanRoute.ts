import { Router } from 'express';
import {
	getLoans,
	getLoanById,
	registerLoan,
} from '../controllers/LoanController';

const router: Router = Router();

router.get('/', getLoans);

router.get('/:id', getLoanById);

router.post('/', registerLoan);

export default router;
