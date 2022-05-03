import { model, Schema } from 'mongoose';
import { Loan } from '../interfaces/SchemaModels';
import { Collections } from '../types';

const LoanSchema = new Schema<Loan>({
	client: {
		type: Schema.Types.ObjectId,
		ref: Collections.Client,
		path: Collections.Client,
	},

	createdAt: {
		type: Date,
		default: new Date(),
	},
});

export default model<Loan>(Collections.Client, LoanSchema);
