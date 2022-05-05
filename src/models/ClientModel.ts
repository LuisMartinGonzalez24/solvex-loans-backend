import { model, Schema } from 'mongoose';
import { Client } from '../interfaces/SchemaModels';
import { Collections } from '../types';

const ClientSchema = new Schema<Client>({
	firstName: {
		type: String,
		required: [true, 'first name is required'],
	},

	lastName: {
		type: String,
		required: [true, 'last name is required'],
	},
});

ClientSchema.methods.toJSON = function () {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { __v, _id, ...client } = this.toObject();
	client.id = _id;

	return client;
};

export default model<Client>(Collections.Client, ClientSchema);
