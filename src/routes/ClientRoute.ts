import { Router } from 'express';
import { registerClient, getClients } from '../controllers/ClientController';

const router: Router = Router();

router.get('/', getClients);

router.post('/', registerClient);

export default router;
