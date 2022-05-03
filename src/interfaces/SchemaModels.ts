import { Schema } from 'mongoose';

export interface Client {
	firstName: string;
	lastName: string;
}

export interface Loan {
	client: Schema.Types.ObjectId;
	createdAt: Date;
}
