import { object, number, string } from 'yup';
import { StatusLoan, TypeInterest } from '.';

export const loanSchema = object({
	clientId: string().required(),
	capital: number().required(),
	interestRate: number().required(),
	typeInterest: string().oneOf(Object.values(TypeInterest)).required(),
	status: string().oneOf(Object.values(StatusLoan)).optional(),
	period: number().min(3).max(12).required(),
});
