import { model, Schema } from 'mongoose';
import { Loan, TypeInterest, StatusLoan } from '../interfaces/SchemaModels';
import { Collections } from '../types';

const LoanSchema = new Schema<Loan>({
	client: {
		type: Schema.Types.ObjectId,
		ref: Collections.Client,
		path: Collections.Client,
	},

	capital: {
		type: Number,
		required: true,
	},

	interestRate: {
		type: Number,
		required: true,
	},

	typeInterest: {
		type: String,
		enum: TypeInterest,
		required: true,
	},

	period: {
		type: Number,
		required: true,
	},

	status: {
		type: String,
		enum: StatusLoan,
		required: true,
	},

	createdAt: {
		type: Date,
		default: new Date(),
	},
});

LoanSchema.methods.toJSON = function () {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { __v, _id, ...loan } = this.toObject();
	loan.id = _id;

	return loan;
};

export default model<Loan>(Collections.Loan, LoanSchema);
