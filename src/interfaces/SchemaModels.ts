import { Schema } from 'mongoose';

export enum StatusLoan {
	Active = 'Active',
	Paid = 'Paid',
	Rejected = 'Rejected',
}

export enum TypeInterest {
	SIMPLE = 'SIMPLE',
	COMPOUND = 'COMPOUND',
}

export interface Client {
	firstName: string;
	lastName: string;
}

export interface Loan {
	client: Schema.Types.ObjectId;
	capital: number;
	interestRate: number;
	typeInterest: TypeInterest;
	period: number;
	createdAt: Date;
	status: StatusLoan;
}
