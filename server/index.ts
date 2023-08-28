import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import questionnaireRoutes from './routes/questionnaire';

//For env File
dotenv.config();

const API_PREFIX = '/api/v1';

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use(API_PREFIX, questionnaireRoutes);

app.get('/', (_: Request, res: Response) => {
	res.send('Welcome to Express & TypeScript Server');
});

app.get(`${API_PREFIX}/healthcheck`, (_, res) => {
	return res.status(200).json({ message: 'Server is running!' });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
