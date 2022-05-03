import { Response, Request } from 'express';
import { errorResponses } from '../types';

export const registerClient = async (req: Request, res: Response) => {
	try {
		return res.status(200).json({ message: 'Client registered' });
	} catch (error) {
		return res.status(500).json(errorResponses['server/internal-error']);
	}
};
