import { Request, Response } from 'express';

import {
	IQuestionTextual,
	IQuestionPredefined,
	QuestionType,
	IQuestionnaireResponse,
	DisplayStyleType,
	IQuestion
} from '../types';

const getQuestions = (_: Request, res: Response) => {
	const textualQuestions: IQuestionTextual[] = [
		{
			id: 1,
			text: 'What is your full name?',
			displayStyle: DisplayStyleType.Textfield,
			type: QuestionType.Text,
			isRequired: true,
			answer: ['']
		},
		{
			id: 2,
			text: 'What is your current job title?',
			displayStyle: DisplayStyleType.Textfield,
			type: QuestionType.Text,
			isRequired: true,
			answer: ['']
		},
		{
			id: 7,
			text: 'Tell us what drives you daily?',
			displayStyle: DisplayStyleType.Textarea,
			type: QuestionType.Text,
			isRequired: true,
			answer: ['']
		},
		{
			id: 8,
			text: 'Is there anything else you would like to share with us?',
			displayStyle: DisplayStyleType.Textarea,
			type: QuestionType.Text,
			isRequired: false,
			answer: ['']
		}
	];

	const predefinedQuestions: IQuestionPredefined[] = [
		{
			id: 3,
			text: 'For which position are you applying?',
			displayStyle: DisplayStyleType.Dropdown,
			type: QuestionType.SingleChoice,
			isRequired: true,
			answerOptions: [
				'Backend Engineer',
				'Frontend Engineer',
				'Fullstack Engineer',
				'DevOps Engineer',
				'Frontend Team Lead',
				'Engineering Manager'
			],
			answer: ['']
		},
		{
			id: 4,
			text: 'Which team would you like to work for?',
			displayStyle: DisplayStyleType.Radio,
			type: QuestionType.SingleChoice,
			isRequired: false,
			answerOptions: ['Core', 'Analytics', 'Integrations'],
			answer: ['']
		},
		{
			id: 5,
			text: 'Which programming languages have you worked with?',
			displayStyle: DisplayStyleType.Checkbox,
			type: QuestionType.MultipleChoice,
			isRequired: true,
			answerOptions: [
				'Javascript',
				'Typescript',
				'Python',
				'Java',
				'C#',
				'C++',
				'C',
				'Elixir',
				'Erlang',
				'Rust',
				'Scala',
				'Go'
			],
			answer: ['']
		},
		{
			id: 6,
			text: 'Which technologies have you worked with?',
			displayStyle: DisplayStyleType.Checkbox,
			type: QuestionType.MultipleChoice,
			isRequired: true,
			answerOptions: [
				'ExpressJS',
				'NestJS',
				'React',
				'NextJS',
				'VueJS',
				'Angular',
				'CSS / SCSS',
				'Material UI',
				'.NET Core',
				'Spring Boot',
				'Phoenix',
				'MongoDB',
				'PostgreSQL',
				'MySQL',
				'GraphQL'
			],
			answer: ['']
		}
	];

	const questions: IQuestion[] = [...textualQuestions, ...predefinedQuestions].sort(
		(a, b) => a.id - b.id
	);

	try {
		return res.status(200).json({
			questions,
			count: questions?.length
		});
	} catch (error) {
		return res.status(400).json({
			errorMessage: 'There was an issue getting questions'
		});
	}
};

const submitQuestionnaire = (req: Request, res: Response) => {
	const body: IQuestionnaireResponse = req.body;

	try {
		return res.status(201).json({
			message: 'Questionnaire has been successfully submitted',
			answers: body.answers,
			userId: body.userId
		});
	} catch (error) {
		return res.status(400).json({
			errorMessage: 'There was an issue submitting questionnaire'
		});
	}
};

export default {
	getQuestions,
	submitQuestionnaire
};
