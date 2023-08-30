import { IQuestion, IQuestionnaireAnswer, IQuestionnaireResponse } from '../../../types';

export interface IGetQuestionsRes {
	questions?: IQuestion[];
	count?: number;
	errorMessage?: string;
}

export type IGetQuestions = () => Promise<IGetQuestionsRes>;

export interface ISubmitQuestionnaireRes {
	message?: string;
	answers?: IQuestionnaireAnswer[];
	userId?: number;
	errorMessage?: string;
}

export type ISubmitQuestionnaire = (
	responseBody: IQuestionnaireResponse
) => Promise<ISubmitQuestionnaireRes>;
