import { Request, Response } from 'express';

const getQuestions = (req: Request, res: Response) => {
	try {
		return res.json({
			test: 'Get is working'
		});
	} catch (error) {
		return res.json({
			test: 'Houston we have a problem'
		});
	}
};

const submitQuestionnaire = (req: Request, res: Response) => {
	try {
		return res.json({
			test: 'Submit is working'
		});
	} catch (error) {
		return res.json({
			test: 'Houston we have a problem'
		});
	}
};

export default {
	getQuestions,
	submitQuestionnaire
};
