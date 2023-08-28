import { IQuestion } from '../../../types';

export interface IGetQuestionsRes {
	questions?: IQuestion[];
	count?: number;
	errorMessage?: string;
}

export type IGetQuestions = () => Promise<IGetQuestionsRes>;
