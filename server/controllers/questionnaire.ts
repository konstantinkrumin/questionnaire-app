import { Request, Response } from 'express';

import { Question, QuestionType } from '../types';

const getQuestions = (_: Request, res: Response) => {
	const questions: Question[] = [
		{
			id: 'q1',
			text: 'Test Question',
			type: QuestionType.Text,
			isRequired: true,
			answerOptions: ['A1', 'A2']
		},
		{
			id: 'q2',
			text: 'Test Question 2',
			type: QuestionType.Text,
			isRequired: true,
			answerOptions: ['B1', 'B2']
		}
	];

	try {
		return res.json({
			questions,
			count: questions?.length
		});
	} catch (error) {
		return res.status(400).json({
			message: 'There was an issue getting questions'
		});
	}
};

const submitQuestionnaire = (_: Request, res: Response) => {
	try {
		return res.status(201).json({
			message: 'Questionnaire has been successfully submitted'
		});
	} catch (error) {
		return res.status(400).json({
			message: 'There was an issue submitting questionnaire'
		});
	}
};

export default {
	getQuestions,
	submitQuestionnaire
};
