import { QuestionPredefined, QuestionTextual } from '../../../types';

export interface IGetQuestionsRes {
	questions?: (QuestionTextual | QuestionPredefined)[];
	count?: number;
	errorMessage?: string;
}

export type GetQuestions = () => Promise<IGetQuestionsRes>;
