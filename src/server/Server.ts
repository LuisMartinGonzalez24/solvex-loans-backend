import express, { Application } from 'express';
import cors from 'cors';
import routes from '../routes';
import { dbConnection } from '../database/config';

class Server {
	private app: Application;
	private port: string;

	constructor() {
		this.app = express();
		this.port = process.env.PORT ?? '8080';

		//* Connect to database
		this.initializeDatabase();

		//* Middlewares
		this.middlewares();

		//* Routes
		this.routes();
	}

	async initializeDatabase() {
		await dbConnection();
	}

	middlewares() {
		//* Applying cors
		this.app.use(cors());

		//* Reading json data
		this.app.use(express.json());

		//* this folders for this application will be used to store public file images
		// this.app.use('/uploads', express.static(path.resolve('uploads')));
	}

	routes() {
		this.app.use(routes);
	}

	runServer() {
		this.app.listen(this.port, () => {
			console.log(`Run server on port: ${this.port}`);
		});
	}
}

export default Server;
