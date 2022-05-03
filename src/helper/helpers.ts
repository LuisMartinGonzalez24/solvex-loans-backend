import { ClientModel } from '../models';

const existClient = async (clientId: string): Promise<boolean> => {
	try {
		const cliet = await ClientModel.findById(clientId);
		return cliet ? true : false;
	} catch (error) {
		console.log(error);
		throw new Error('Error searching client!');
	}
};

export { existClient };
