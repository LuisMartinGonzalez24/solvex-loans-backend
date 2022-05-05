import { Response, Request } from 'express';
import { ValidationError } from 'yup';
import { isValidObjectId } from 'mongoose';
import { loanSchema, StatusLoan } from '../interfaces';
import { ClientModel, LoanModel } from '../models';
import { errorResponses } from '../types';

export const registerLoan = async (req: Request, res: Response) => {
	try {
		const data = await loanSchema.validate(req.body);

		if (!isValidObjectId(data.clientId)) {
			return res.status(400).json({
				code: errorResponses['loan/error-register'].code,
				message: 'User no exist in data base',
			});
		}

		const currentClient = await ClientModel.findById(data.clientId);

		if (!currentClient) {
			return res.status(400).json({
				code: errorResponses['loan/error-register'].code,
				message: 'User no exist in data base',
			});
		}

		const loan = await new LoanModel({
			...data,
			createdAt: new Date(),
			client: data.clientId,
			status: StatusLoan.Active,
		}).save();

		return res.status(200).json({
			loan: {
				...loan.toJSON(),
				client: `${currentClient.firstName} ${currentClient.lastName}`,
			},
			message: 'Loan registered',
		});
	} catch (err) {
		console.log(err);

		if (err instanceof ValidationError) {
			return res.status(400).json({ message: err.message, err });
		}

		res.status(500).json(errorResponses['server/internal-error']);
	}
};

export const getLoans = async (req: Request, res: Response) => {
	try {
		const loans = await LoanModel.find().populate('client', [
			'firstName',
			'lastName',
		]);

		return res.status(200).json({ loans });
	} catch (err) {
		console.log(err);

		if (err instanceof ValidationError) {
			return res.status(400).json({ message: err.message, err });
		}

		res.status(500).json(errorResponses['server/internal-error']);
	}
};

export const getLoanById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		if (!isValidObjectId(id)) {
			return res.status(400).json({
				code: errorResponses['loan/dcoument-not-exist'].code,
				message: `Loan with id: ${id} does not exist`,
			});
		}

		const loan = await LoanModel.findById(id);

		if (!loan) {
			return res
				.status(400)
				.json(errorResponses['loan/dcoument-not-exist']);
		}

		res.status(200).json({ loan, desde: 'Desde loans params' });
	} catch (err) {
		console.log(err);

		if (err instanceof ValidationError) {
			return res.status(400).json({
				message: err.message,
				err,
			});
		}

		res.status(500).json(errorResponses['server/internal-error']);
	}
};
