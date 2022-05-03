import { Router } from 'express';
import ClientRoute from './ClientRoute';
import LoanRoute from './LoanRoute';
import { MainPathNames } from '../types';

const router: Router = Router();

//* Client routes
router.use(MainPathNames.Client, ClientRoute);

//* Loan routes
router.use(MainPathNames.Loan, LoanRoute);

export default router;
