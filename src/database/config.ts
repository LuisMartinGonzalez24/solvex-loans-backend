import { connect } from 'mongoose';

const mongodbConnection = 'mongodb://localhost/solvex-loans';

export const dbConnection = async () => {
	try {
		await connect(mongodbConnection);
		console.log('Database connection succesfull');
	} catch (error) {
		console.log(error);
		throw new Error('Error to connect mongo database');
	}
};
