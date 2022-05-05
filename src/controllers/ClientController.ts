import { Response, Request } from 'express';
import { ClientModel } from '../models';
import { errorResponses } from '../types';

export const registerClient = async (req: Request, res: Response) => {
	try {
		await new ClientModel(req.body).save();

		return res.status(200).json({ message: 'Client registered' });
	} catch (error) {
		return res.status(500).json(errorResponses['server/internal-error']);
	}
};

export const getClients = async (req: Request, res: Response) => {
	try {
		const clients = await ClientModel.find();

		return res.status(200).json({
			clients: clients.map(({ id, firstName, lastName }) => ({
				id,
				client: `${firstName} ${lastName}`,
			})),
		});
	} catch (error) {
		return res.status(500).json(errorResponses['server/internal-error']);
	}
};
