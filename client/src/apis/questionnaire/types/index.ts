import { Question } from '../../../types';

export interface IGetQuestionsRes {
	questions?: Question[];
	count?: number;
	errorMessage?: string;
}

export type GetQuestions = () => Promise<IGetQuestionsRes>;
